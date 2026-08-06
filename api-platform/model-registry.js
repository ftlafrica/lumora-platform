const modelRegistry = [
  { name: "Masakhane NLP", provider: "huggingface", source: "huggingface.co/masakhane", type: "Models and datasets", languages: "Many African languages", tasks: ["ner", "qa", "sentiment", "translation", "benchmarks"], readiness: "A" },
  { name: "InkubaLM", provider: "huggingface", source: "huggingface.co/lelapa/InkubaLM-0.4B", type: "Small language model", languages: "isiZulu, Yoruba, Hausa, Swahili, isiXhosa", tasks: ["generation", "fine-tuning"], readiness: "A" },
  { name: "AfroLM", provider: "huggingface", source: "huggingface.co/bonadossou/afrolm_active_learning", type: "Masked language model", languages: "23 African languages", tasks: ["classification", "ner", "sentiment", "embeddings"], readiness: "A" },
  { name: "AfriBERTa", provider: "huggingface", source: "huggingface.co/castorini/afriberta_base", type: "BERT-style model", languages: "11 African languages", tasks: ["classification", "ner"], readiness: "B" },
  { name: "AfroXLMR", provider: "huggingface", source: "huggingface.co/Davlan/afro-xlmr-base", type: "XLM-R adapted model", languages: "17 African languages plus Arabic/French/English", tasks: ["understanding", "classification"], readiness: "A" },
  { name: "AfroXLMR-Social", provider: "huggingface", source: "huggingface.co/Tadesse/AfroXLMR-Social", type: "Social-domain model", languages: "19 African languages", tasks: ["slang", "tone", "sentiment", "informal-text"], readiness: "B" },
  { name: "AfriNLLB", provider: "huggingface", source: "huggingface.co/AfriNLP/AfriNLLB-12enc-12dec-full-ft", type: "Translation model", languages: "African language pairs", tasks: ["translation"], readiness: "A" },
  { name: "Meta NLLB-200", provider: "huggingface", source: "huggingface.co/facebook/nllb-200-distilled-600M", type: "Translation fallback", languages: "200+ languages", tasks: ["translation-fallback"], readiness: "A" },
  { name: "Meta MMS", provider: "huggingface", source: "huggingface.co/facebook/mms-1b-all", type: "Speech model", languages: "1000+ languages", tasks: ["asr", "speech"], readiness: "B" },
  { name: "Simba-H", provider: "huggingface", source: "huggingface.co/UBC-NLP/Simba-H", type: "African speech ecosystem", languages: "39 languages in listed checkpoint", tasks: ["asr", "tts", "benchmarking"], readiness: "B" }
];

module.exports = { modelRegistry };
