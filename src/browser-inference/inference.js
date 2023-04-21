/** */
/*global BigInt */
/*global BigInt64Array */

import { loadTokenizer } from "./bert_tokenizer.ts";
/* eslint-disable */
import * as wasmFeatureDetect from "wasm-feature-detect";

//Setup onnxruntime
const ort = require("onnxruntime-web");

//requires Cross-Origin-*-policy headers https://web.dev/coop-coep/
/**
const simdResolver = wasmFeatureDetect.simd().then(simdSupported => {
    console.log("simd is supported? "+ simdSupported);
    if (simdSupported) {
      ort.env.wasm.numThreads = 3; 
      ort.env.wasm.simd = true;
    } else {
      ort.env.wasm.numThreads = 1; 
      ort.env.wasm.simd = false;
    }
});
*/

const options = {
  executionProviders: ["wasm"],
  graphOptimizationLevel: "all",
};

var downLoadingModel = true;
const model = "./xtremedistill-int8_quantized.onnx";

const session = ort.InferenceSession.create(model, options);
session.then((t) => {
  downLoadingModel = false;
  lm_inference("cunt and bitch").then((d) => console.log(d["output_0"]));
});

const tokenizer = loadTokenizer();

function isDownloading() {
  return downLoadingModel;
}

function create_model_input(encoded) {
  var input_ids = new Array(encoded.length + 2);
  var attention_mask = new Array(encoded.length + 2);
  var token_type_ids = new Array(encoded.length + 2);
  input_ids[0] = BigInt(101);
  attention_mask[0] = BigInt(1);
  token_type_ids[0] = BigInt(0);
  var i = 0;
  for (; i < encoded.length; i++) {
    input_ids[i + 1] = BigInt(encoded[i]);
    attention_mask[i + 1] = BigInt(1);
    token_type_ids[i + 1] = BigInt(0);
  }
  input_ids[i + 1] = BigInt(102);
  attention_mask[i + 1] = BigInt(1);
  token_type_ids[i + 1] = BigInt(0);
  const sequence_length = input_ids.length;
  input_ids = new ort.Tensor("int64", BigInt64Array.from(input_ids), [
    1,
    sequence_length,
  ]);
  attention_mask = new ort.Tensor("int64", BigInt64Array.from(attention_mask), [
    1,
    sequence_length,
  ]);
  token_type_ids = new ort.Tensor("int64", BigInt64Array.from(token_type_ids), [
    1,
    sequence_length,
  ]);
  return {
    input_ids: input_ids,
    attention_mask: attention_mask,
    token_type_ids: token_type_ids,
  };
}

async function lm_inference(text) {
  try {
    console.log(text, "text");
    const encoded_ids = await tokenizer.then((t) => {
      let tokenized = t.tokenize(text);
      return tokenized;
    });
    console.log(encoded_ids, "encoded ids");
    if (encoded_ids.length === 0) {
      return false;
    }

    const model_input = create_model_input(encoded_ids);
    // console.log(model_input, "model_input")
    const output = await session.then((s) => {
      return s.run(model_input, ["output_0"]);
    });
    // console.log(output, "output")
    const probs = output["output_0"];
    // console.log(probs, "probs")
    if (probs.data[0] > probs.data[1]) {
      return false;
    }
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export let inference = lm_inference;
export let modelDownloadInProgress = isDownloading;
