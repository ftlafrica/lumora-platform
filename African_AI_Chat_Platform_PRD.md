# African AI Chat Platform PRD

Product name: **Lumora**

Version: 0.1  
Date: 2026-04-29  
Status: Product discovery and PRD draft

## 1. Product Vision

Build an AI chat platform for Africans that understands African languages, dialects, cultural context, and conversational tone. The product should feel as polished and powerful as Gemini or ChatGPT, but culturally rooted: multilingual, voice-friendly, locally useful, and designed with a futuristic African visual identity.

The app should not only translate African languages. It should understand how people actually speak: code-switching, proverbs, street tone, respect levels, regional phrases, mixed English/French/Arabic/Portuguese, Pidgin, Sheng, Darija, and community-specific expressions.

### Naming Rationale

**Lumora** is intentionally not tied to one African country, ethnic group, instrument, or language. The name suggests light, intelligence, memory, and oral expression while staying broad enough to represent all African languages and dialects. It fits the Neon Baobab visual direction because it can feel luminous, premium, and future-facing without sounding regional.

## 2. Strategic Differentiation

Most global AI assistants treat African languages as edge cases. This platform will make them the center of the experience.

Core differentiators:

- **African tone intelligence:** lets users choose conversational modes such as formal, elder-respectful, friendly, street, business, poetic, spiritual, youth, classroom, or market tone.
- **Dialect-aware interaction:** country and dialect preferences guide language detection, response style, idioms, and examples.
- **Code-switching by default:** supports natural blending of English, French, Arabic, Portuguese, Pidgin, and local languages.
- **Voice-first Africa:** speech input/output for users who prefer speaking over typing.
- **Local utility layer:** education, farming, trade, health information guidance, government services, small-business writing, religious/cultural events, and travel support.
- **Community language growth:** users can contribute corrections, dialect samples, proverbs, pronunciations, and slang with review workflows.
- **Model routing:** the app picks the right model for the job rather than relying on one model for everything.

## 3. Design Thinking Process

### Empathize

Primary user groups:

- Students who need explanations in local language and local examples.
- Traders and small-business owners who need writing, translation, pricing, invoices, customer replies, and market communication.
- Professionals who need polished English/French/Arabic/Portuguese while thinking in African languages.
- Parents and elders who prefer voice and culturally respectful responses.
- Diaspora users who want to reconnect with language, slang, stories, and cultural memory.
- Creators who need captions, scripts, songs, comedy, skits, and multilingual content.
- Researchers and language communities preserving underrepresented languages.

Observed user needs:

- "Understand me even when I mix languages."
- "Reply in the way my people talk."
- "Do not make my language sound robotic."
- "Help me translate, but keep the feeling."
- "Let me speak, not only type."
- "Make AI useful for my everyday life, not just tech tasks."

### Define

Problem statement:

African users need an AI assistant that understands their language, dialect, speech, tone, and cultural context because existing assistants often misread low-resource languages, flatten local expression, ignore dialect variation, and respond in unnatural imported styles.

Product challenge:

Create a futuristic AI chat platform that feels premium and culturally African, while remaining technically flexible enough to integrate many open models, datasets, and future custom fine-tunes.

### Ideate

Breakthrough product ideas:

- **Tone Dial:** a visible control that changes response tone: Respectful, Casual, Street, Business, Teacher, Storyteller, Elder, Youth.
- **Dialect Passport:** user profile containing country, region, languages, dialects, writing script, and preferred formality.
- **Community Corrections:** users can flag awkward translations and suggest natural phrasing.
- **Proverb Mode:** assistant can explain using local proverbs, metaphors, and oral storytelling patterns.
- **Market Mode:** small-business assistant for WhatsApp replies, product descriptions, invoices, negotiation scripts, and price explanations.
- **Classroom Mode:** explains in simple local-language examples, with quizzes and voice reading.
- **Creator Mode:** captions, skits, bilingual scripts, ad copy, names, slogans, and cultural references.
- **Voice Circle:** tap to speak; app detects language, transcribes, translates if needed, and responds by text or voice.
- **Language Confidence Display:** shows detected language/dialect confidence and allows correction.
- **African Knowledge Packs:** curated local knowledge bases for agriculture, health guidance, legal literacy, exams, civic services, culture, and history.

### Prototype

MVP prototype screens:

1. Chat home
2. Language and dialect setup
3. Chat thread with tone dial
4. Voice input and speech playback
5. Model/source confidence panel
6. Community correction flow
7. Discover page for use cases
8. Profile language passport

### Test

Pilot testing should happen with native speakers across regions. Each session should test:

- Language detection accuracy
- Dialect recognition
- Naturalness of tone
- Translation meaning preservation
- Voice transcription quality
- Cultural appropriateness
- Safety and harmful advice handling
- Whether users trust the assistant

## 4. Visual Design Direction

Design artifacts:

- Working web platform: `web-platform/index.html`
- API platform scaffold: `api-platform/server.js`
- Master execution plan: `Lumora_Master_Execution_Plan.md`
- App navigation map: `Lumora_App_Navigation_Map.md`
- Component inventory: `Lumora_Component_Inventory.md`
- UI QA checklist: `Lumora_UI_QA_Checklist.md`
- Design system: `Lumora_Design_System.md`
- Product experience map: `Lumora_Product_Experience_Map.md`
- Welcome concept: `Lumora_Welcome_Concept.html`
- First UI concept: `Lumora_Clean_Chat_Concept.html`
- Fresh chat state: `Lumora_Fresh_Chat_Concept.html`
- Login/sign-up concept: `Lumora_Auth_Concept.html`
- Premium plans concept: `Lumora_Plans_Concept.html`
- Admin dashboard concept: `Lumora_Admin_Dashboard_Concept.html`

Design principle:

**Afro-Futurist Signal.**

The visual identity should feel like a living intelligence network built from African rhythm, language, light, and motion. It should feel premium, fast, mysterious, useful, and alive: closer to Lagos at midnight, Nairobi tech labs, Accra nightlife, Johannesburg energy, Addis geometry, and Dakar rhythm than to a traditional heritage palette.

The brand should avoid obvious visual stereotypes. African culture should appear through geometry, rhythm, tone, motion, texture, naming, language behavior, and luminous contrast rather than flags, safari references, or generic "tribal" decoration.

Official direction:

**Neon Baobab**

Neon Baobab uses dark cosmic surfaces, electric accents, warm solar glows, mineral colors, and neon language signals. Yellow remains present, but as a sharp neon signal rather than the base identity.

Core palette:

- **Deep Space:** #07070D
- **Carbon Black:** #111118
- **Midnight Indigo:** #17113D
- **Solar Neon:** #F8FF3D
- **Electric Cyan:** #00F5D4
- **Violet Pulse:** #8B5CF6
- **Magma Coral:** #FF4D6D
- **Palm Signal:** #21E06B
- **Copper Glow:** #C46A2B
- **Soft Cloud:** #F5F2EA

UI feel:

- Dark, cinematic, and premium as the default experience.
- Neon yellow used as a recognizable intelligence signal, not a dominant background.
- Electric turquoise, violet, coral, and green used for active states, AI presence, voice waves, tone controls, and generated insight highlights.
- Copper used sparingly to preserve warmth and African materiality without making the interface feel traditional.
- Pattern language inspired by woven logic, bead geometry, carved rhythm, sound waves, urban light grids, language maps, and call-and-response.
- Motion should feel like language becoming visible: pulses, waveforms, conversational rings, soft signal trails, and geometric transitions.
- Light mode should remain available, but the hero identity should be dark-first.

Avoid:

- Generic safari styling.
- Overused tribal decoration without meaning.
- Flags as the primary identity.
- Making the product look like a tourism website.
- Flattening Africa into one visual culture.
- Using yellow as the whole brand personality.
- Beige, brown, or heritage-only palettes that make the product feel historical instead of future-facing.

### Explored Palette Directions

These directions were considered and should remain available for future brand, campaign, or sub-product exploration.

#### Sahara Cyberpunk

Warmer and more cinematic: desert sun, heat, and future-city energy.

- **Obsidian:** #08090B
- **Night Clay:** #1A1012
- **Solar Flare:** #FFE600
- **Neon Ember:** #FF6B00
- **Cyber Teal:** #00E6C3
- **Royal Ultraviolet:** #7C3AED
- **Crimson Signal:** #FF1744
- **Sand Glass:** #E9D8A6

#### Atlantic Neon

Cooler, sharper, more oceanic and global-tech.

- **Abyss Black:** #050816
- **Deep Atlantic:** #001B2E
- **Neon Cyan:** #00F0FF
- **Signal Lime:** #D7FF00
- **Digital Violet:** #9D4EDD
- **Coral Red:** #FF3864
- **Moon Ivory:** #F8F7F2
- **Graphite:** #191B22

#### Kente Hologram

The most culturally expressive direction, suitable for campaigns, creator tools, onboarding moments, and celebratory product surfaces.

- **Void Black:** #060608
- **Ink Purple:** #211038
- **Hologram Gold:** #F9E900
- **Laser Green:** #39FF88
- **Anansi Blue:** #00B4FF
- **Festival Red:** #FF2A5F
- **Royal Violet:** #B026FF
- **Bone White:** #F4EFE6

## 5. Product Requirements

### Product Standard

Lumora should behave like a premium AI chat product first. The interface should be simple, centered, fast, and calm. African differentiation should appear through language understanding, tone control, voice behavior, cultural context, local usefulness, and community improvement loops rather than visual clutter.

Core product rules:

- Welcome introduces Lumora for first launch and routes users into chat, account creation, or plans.
- Fresh chat begins with a centered composer.
- Active chat uses a familiar AI workspace with a sidebar, central conversation, and bottom composer.
- Mobile hides complexity behind drawers and sheets.
- Language and tone are always accessible.
- Profile, settings, plans, memory, theme, and font controls live in the profile/settings menu.
- Users may access a personal **Dashboard** with safe plan, language, profile, and activity information.
- Enterprise **Admin Console** tooling is separate from the consumer chat experience and must not appear as a normal user profile feature.
- Admin Console access is granted only by seed admin control, then limited through RBAC/ABAC roles for leadership, developers, finance, support, moderation, security, and operations.

### Experience Pillars

- **Language intelligence:** code-switching, dialect hints, tone, formality, proverbs, slang, and correction loops.
- **Voice-first access:** speech input, transcription, translation, and future read-aloud responses.
- **Simple surface:** the main chat stays focused while advanced tools remain discoverable.
- **Trust:** show confidence, allow correction, and route sensitive topics carefully.
- **Community growth:** native-speaker review and user corrections improve language quality over time.

### MVP

- Account creation and guest mode.
- Country, language, dialect, and tone onboarding.
- Text chat.
- Voice input for supported languages.
- AI response in selected language/tone.
- Code-switching support.
- Translation mode.
- Language detection and correction.
- Prompt examples by use case.
- Conversation history.
- Feedback on bad language output.
- Personal dashboard with non-sensitive user information.
- Seed-admin-gated enterprise admin foundation.

### V1

- Speech output for priority languages.
- Community correction dashboard.
- Local knowledge packs.
- Creator tools.
- Classroom mode.
- Business/market mode.
- WhatsApp share/export.
- Offline-friendly saved chats.
- Safety layer for medical, legal, financial, and civic answers.
- Model performance dashboard by language.

### V2

- Fine-tuned proprietary African assistant model.
- User-contributed dialect dataset with consent and review.
- Agent tools for form filling, applications, and local services.
- Developer API.
- Organization/team accounts.
- Country-specific editions.
- Marketplace for verified cultural/language packs.

## 6. AI Architecture

Recommended approach:

Use a router-based architecture. The app should not depend on a single model. It should route tasks to the best available model by language, capability, license, latency, and cost.

Core model layers:

- **Primary reasoning LLM:** general chat, planning, summarization, and tool use.
- **African language LLMs/encoders:** local-language understanding, classification, NER, sentiment, and language-specific fine-tuning.
- **Translation models:** cross-language communication and fallback.
- **Speech models:** ASR, TTS, speech translation.
- **Safety models:** policy classification, sensitive-domain routing, harmful content filtering.
- **Evaluation models:** compare outputs against language benchmarks and human feedback.

Routing logic:

1. Detect language, script, dialect hints, country, and tone.
2. Classify task: chat, translate, transcribe, explain, create, search, summarize, safety-sensitive.
3. Select model chain.
4. Generate answer.
5. Apply tone and cultural style pass.
6. Run safety and factuality checks.
7. Return answer with optional confidence and correction button.

## 7. Open Model And Dataset Registry

This is the initial research registry. Before production use, every item needs license review, benchmark testing, latency testing, and commercial-use validation.

| Source | Type | Coverage | Where stored | Best use |
|---|---|---:|---|---|
| Masakhane NLP | Models and datasets | Many African languages | Hugging Face org: `masakhane` | NER, POS, QA, sentiment, MT datasets, benchmarks |
| Lelapa InkubaLM | Small language model | isiZulu, Yoruba, Hausa, Swahili, isiXhosa plus English/French data | Hugging Face: `lelapa/InkubaLM-0.4B` | Lightweight local-language generation and fine-tuning |
| Inkuba-Mono / Inkuba-Instruct | Datasets | Five African languages plus English/French | Hugging Face: `lelapa/Inkuba-Mono`, Inkuba dataset family | Pretraining, instruction tuning, evaluation |
| AfroLM | Masked language model | 23 African languages | Hugging Face: `bonadossou/afrolm_active_learning` | Text classification, NER, sentiment, embeddings/fill-mask tasks |
| AfriBERTa | BERT-style model | 11 African languages | Hugging Face: `castorini/afriberta_base` | Classification, NER, fine-tuning |
| AfroXLMR | XLM-R adapted model | 17 African languages plus Arabic/French/English | Hugging Face: `Davlan/afro-xlmr-base`, `Davlan/afro-xlmr-large` | NER, classification, language understanding |
| AfroXLMR-Social | Social-domain model | 19 African languages | Hugging Face: `Tadesse/AfroXLMR-Social` | Social media tone, slang, sentiment, informal language |
| AfriNLLB | Translation model family | 15 language pairs, 30 directions | Hugging Face: `AfriNLP/AfriNLLB-*` | Efficient African-language translation |
| Meta NLLB-200 | Translation model | 200+ languages, many African languages | Hugging Face: `facebook/nllb-200-*` | Translation fallback and broad coverage |
| Meta MMS | Speech models | 1000+ languages | Hugging Face: `facebook/mms-1b-all` | ASR for many African languages |
| SeamlessM4T | Speech/text translation | Nearly 100 languages depending on task | Hugging Face / Meta | Speech-to-text, text-to-speech, speech translation |
| Mozilla Common Voice | Voice dataset | Many global languages, including African language contributions | Mozilla Common Voice dataset | ASR/TTS training and evaluation |
| Simba / Voice of a Continent | African speech ecosystem | 39 languages in listed Simba-H checkpoint | Hugging Face: `UBC-NLP/Simba-H`, Simba family | African ASR/TTS benchmarking and speech models |

## 8. Priority Language Strategy

Phase 1 should start with high-impact languages that have stronger open resources:

- Yoruba
- Hausa
- Igbo
- Nigerian Pidgin
- Swahili
- Amharic
- Oromo
- Somali
- Kinyarwanda
- Luganda
- Twi/Akan
- Wolof
- Zulu
- Xhosa
- Shona
- Afrikaans
- Arabic varieties: Egyptian Arabic, Moroccan Darija, Algerian Arabic, Modern Standard Arabic
- French, English, Portuguese, and Arabic as bridge languages

Phase 2 should expand by regional clusters:

- West Africa: Ewe, Fon, Bambara, Mossi/Moore, Fulfulde, Mandinka, Krio
- East Africa: Tigrinya, Kirundi, Luo, Maasai, Gikuyu, Kamba
- Central Africa: Lingala, Sango, Kikongo, Tshiluba
- Southern Africa: Setswana, Sesotho, Chichewa/Nyanja, Xitsonga, Venda, Ndebele
- North Africa: Tamazight/Amazigh variants, Tachelhit, Tunisian Arabic, Libyan Arabic
- Lusophone Africa: Mozambican Portuguese varieties, Kimbundu, Umbundu, Makhuwa

## 9. Country Coverage Method

Models are usually organized by language, not by country. The app should maintain a country-language-dialect registry:

- Country
- Official languages
- Major local languages
- Dialects/variants
- Scripts
- Available model support
- Available speech support
- Translation support
- Dataset source
- License
- Quality score
- Human reviewer notes

This registry becomes the operational bridge between "all African countries" and the model layer.

### 54-Country Coverage Matrix

Readiness codes:

- **A:** strong starting coverage from open African-language text resources, evaluation datasets, translation, and/or speech models.
- **B:** workable starting coverage through bridge languages, NLLB/MMS/SeamlessM4T, and related regional languages, but needs native evaluation.
- **C:** under-resourced for the app's goals; requires community data, language partners, or custom collection before high-confidence launch.

Important note:

This matrix is a product and engineering starting point, not a final linguistic authority. Each row should be validated with native speakers, linguists, and license review before production launch. Many models are language-based rather than country-based, so countries with shared languages can benefit from the same model families while still requiring country-specific tone, dialect, and cultural QA.

| Country | Priority language and dialect targets | Best starting model/data sources | Readiness |
|---|---|---|---|
| Algeria | Arabic, Algerian Arabic, Tamazight variants, French | AfriSenti for Algerian Arabic, AfroXLMR-Social, NLLB, MMS, SeamlessM4T | B |
| Angola | Portuguese, Umbundu, Kimbundu, Kikongo, Chokwe | NLLB, MMS, SeamlessM4T, community data collection | C |
| Benin | French, Fon, Yoruba, Dendi, Bariba | Masakhane AfriQA for Fon/Yoruba, NLLB, MMS | B |
| Botswana | English, Setswana, Kalanga, Sekgalagadi | Masakhane/NTREX for Setswana, NLLB, MMS, SeamlessM4T | B |
| Burkina Faso | French, Moore, Dioula/Jula, Fulfulde, Gourmanchema | NLLB, MMS, regional Bambara/Fulfulde resources, community data | C |
| Burundi | Kirundi/Rundi, French, English, Swahili | MasakhaNEWS for Rundi, NLLB, MMS, SeamlessM4T | B |
| Cabo Verde | Portuguese, Cape Verdean Creole/Kriolu | Portuguese bridge models, NLLB, MMS, community Kriolu dataset | C |
| Cameroon | French, English, Fulfulde, Ewondo, Duala, Bassa, Cameroonian Pidgin | NLLB, MMS, regional Fulfulde resources, custom Pidgin/dialect collection | C |
| Central African Republic | French, Sango, local languages | NLLB, MMS, community Sango collection, French bridge | C |
| Chad | French, Arabic, Chadian Arabic, Sara, Kanembu | Arabic/French bridge models, NLLB, MMS, community data | C |
| Comoros | Comorian/Shikomori, Arabic, French | Arabic/French bridge models, NLLB, MMS, custom Shikomori collection | C |
| Congo, Republic of the | French, Lingala, Kituba/Kikongo | AfroLM/MasakhaNEWS/AFRIMGSM for Lingala, NLLB, MMS | B |
| Cote d'Ivoire | French, Dioula/Jula, Baoule, Bete, Senufo | French bridge, NLLB, MMS, Bambara/Jula regional resources, community data | C |
| Democratic Republic of Congo | French, Lingala, Swahili, Kikongo, Tshiluba | AfroLM and MasakhaNEWS for Lingala/Swahili, AfriNLLB, NLLB, MMS | A |
| Djibouti | Somali, Afar, Arabic, French | AfroLM/MasakhaNEWS for Somali, NLLB, MMS, Arabic/French bridge | B |
| Egypt | Arabic, Egyptian Arabic, English | Arabic resources, AfroXLMR-Social for Arabic social text, NLLB, MMS, SeamlessM4T | B |
| Equatorial Guinea | Spanish, Fang, Bube, Annobonese, French, Portuguese | Spanish/French/Portuguese bridge models, NLLB, MMS, custom local data | C |
| Eritrea | Tigrinya, Arabic, Tigre, Afar, Saho | AfroLM/MasakhaNEWS/AfriSenti for Tigrinya, NLLB, MMS | B |
| Eswatini | siSwati, English, Zulu | Masakhane NTREX for siSwati, InkubaLM/AfroXLMR for Zulu adjacency, NLLB, MMS | B |
| Ethiopia | Amharic, Oromo, Tigrinya, Somali, Afar | AfroLM, AfriBERTa, AfroXLMR, AfriSenti, MasakhaNEWS, NLLB, MMS | A |
| Gabon | French, Fang, Myene, Punu, Nzebi | French bridge, NLLB, MMS, community language collection | C |
| Gambia | English, Mandinka, Wolof, Fula, Jola | AfroLM/AfriNLLB/AFRIMGSM for Wolof, NLLB, MMS, regional Fula/Mandinka data | B |
| Ghana | English, Twi/Akan, Ewe, Dagbani, Ga | AfroLM, AfriQA for Twi, Masakhane NTREX for Ewe, AfroXLMR, NLLB, MMS | A |
| Guinea | French, Fula/Pular, Malinke, Susu | NLLB, MMS, regional Fulfulde/Mandinka resources, French bridge | C |
| Guinea-Bissau | Portuguese, Guinea-Bissau Creole, Balanta, Fula, Mandinka | Portuguese bridge, NLLB, MMS, community Creole collection | C |
| Kenya | English, Swahili, Sheng, Luo, Kikuyu, Kamba | InkubaLM for Swahili, AfroLM, MasakhaNEWS, NLLB, MMS, Common Voice | A |
| Lesotho | Sesotho, English, Zulu, Xhosa | NLLB, MMS, Southern African shared resources, AfroXLMR adjacency | B |
| Liberia | English, Liberian English/Kolokwa, Kpelle, Bassa, Grebo | English bridge, NLLB, MMS, custom Kolokwa/local language data | C |
| Libya | Arabic, Libyan Arabic, Amazigh, Tebu, Tuareg | Arabic resources, NLLB, MMS, AfroXLMR-Social, community dialect data | C |
| Madagascar | Malagasy, French | NLLB, MMS, SeamlessM4T, Malagasy community evaluation | B |
| Malawi | Chichewa/Nyanja, English, Yao, Tumbuka | Masakhane NTREX for Nyanja, NLLB, MMS, community evaluation | B |
| Mali | French, Bambara, Fulfulde, Songhai, Tamasheq | NLLB, MMS, regional Bambara/Fulfulde resources, French bridge | B |
| Mauritania | Arabic, Hassaniya, Pulaar, Soninke, Wolof, French | AfriNLLB/AfroLM for Wolof, Arabic/French bridge, NLLB, MMS | B |
| Mauritius | Mauritian Creole, English, French, Bhojpuri | French/English bridge, NLLB, MMS, custom Creole collection | C |
| Morocco | Arabic, Moroccan Darija, Tamazight variants, French | AfriSenti for Moroccan Arabic, AfroXLMR-Social, NLLB, MMS | B |
| Mozambique | Portuguese, Mozambican Portuguese, Makhuwa, Sena, Tsonga, Nyanja | AfriSenti for Mozambican Portuguese, Masakhane NTREX for Tsonga/Nyanja, NLLB, MMS | B |
| Namibia | English, Oshiwambo, Afrikaans, Khoekhoe, Herero | NLLB, MMS, Afrikaans support, community data for Oshiwambo/Khoekhoe | C |
| Niger | French, Hausa, Zarma/Songhai, Fulfulde, Tamasheq, Kanuri | AfroLM/AfriBERTa/Masakhane for Hausa, NLLB, MMS | B |
| Nigeria | English, Nigerian Pidgin, Yoruba, Hausa, Igbo, Fulfulde, Kanuri | InkubaLM, AfroLM, AfriBERTa, AfroXLMR, Masakhane, AfriSenti, NLLB, MMS | A |
| Rwanda | Kinyarwanda, English, French, Swahili | AfriBERTa, AfroLM, AfroXLMR, AfriQA, AfriSenti, NLLB, MMS | A |
| Sao Tome and Principe | Portuguese, Forro, Angolar, Principense | Portuguese bridge, NLLB, MMS, custom Creole data | C |
| Senegal | French, Wolof, Pulaar, Serer, Mandinka | AfroLM, AfroXLMR, AfriNLLB, AfriQA/AFRIMGSM for Wolof, NLLB, MMS | A |
| Seychelles | Seychellois Creole, English, French | English/French bridge, NLLB, MMS, custom Creole data | C |
| Sierra Leone | English, Krio, Mende, Temne, Limba | English bridge, NLLB, MMS, custom Krio/Mende/Temne data | C |
| Somalia | Somali, Arabic, English | AfroLM/MasakhaNEWS for Somali, NLLB, MMS, SeamlessM4T | B |
| South Africa | English, Zulu, Xhosa, Afrikaans, Sesotho, Setswana, Sepedi, Xitsonga, Venda, Ndebele | InkubaLM, AfroXLMR, Masakhane, NLLB, MMS, Simba, NTREX | A |
| South Sudan | English, Juba Arabic, Dinka, Nuer, Bari, Zande | English/Arabic bridge, NLLB, MMS, community data | C |
| Sudan | Arabic, Sudanese Arabic, Nubian, Beja, Fur | Arabic bridge, NLLB, MMS, community dialect data | C |
| Tanzania | Swahili, English, Sukuma, Chaga, Haya, Nyamwezi | InkubaLM for Swahili, AfroLM, MasakhaNEWS, NLLB, MMS | A |
| Togo | French, Ewe, Kabye, Mina, Tem | Masakhane NTREX/AFRIMGSM for Ewe, NLLB, MMS, French bridge | B |
| Tunisia | Arabic, Tunisian Arabic, French, Tamazight | Arabic/French bridge, AfroXLMR-Social, NLLB, MMS, community dialect data | C |
| Uganda | English, Luganda, Swahili, Runyankole, Ateso, Acholi | MasakhaNEWS/AFRIMGSM for Luganda, NLLB, MMS, Common Voice where available | B |
| Zambia | English, Bemba, Nyanja/Chichewa, Tonga, Lozi | AfriQA for Bemba, Masakhane NTREX for Bemba/Nyanja, NLLB, MMS | B |
| Zimbabwe | English, Shona, Ndebele, Nyanja, Tonga, Venda | MasakhaNEWS/AFRIMGSM for Shona, NTREX for Ndebele/Nyanja/Venda, NLLB, MMS | B |

### Coverage Build Order

For MVP, launch with countries where language resources, population reach, and testing access create the strongest foundation:

1. Nigeria
2. Ghana
3. Kenya
4. South Africa
5. Ethiopia
6. Tanzania
7. Rwanda
8. Senegal
9. Democratic Republic of Congo
10. Morocco

For each launch country, create:

- Language pack
- Dialect and tone guide
- Prompt examples
- Evaluation set
- Native-speaker review panel
- Speech test set
- Safety and cultural sensitivity notes
- Model routing profile

### Model Connection Plan By Capability

| Capability | Preferred first connection | Fallback |
|---|---|---|
| General chat | Primary reasoning LLM with African tone layer | General multilingual LLM plus translation |
| African language understanding | AfroXLMR, AfroLM, AfriBERTa, InkubaLM experiments | XLM-R, mBERT, general multilingual embeddings |
| Translation | AfriNLLB where available | Meta NLLB-200, SeamlessM4T |
| Speech-to-text | MMS, Simba family where language is covered | SeamlessM4T, Whisper-style fallback with native QA |
| Text-to-speech | SeamlessM4T or available language-specific TTS | Community voice collection and later custom TTS |
| Sentiment and tone | AfriSenti, AfroXLMR-Social | Custom classifier from user feedback |
| Evaluation | AfriQA, MasakhaNEWS, AFRIMMLU, AFRIMGSM, NTREX African | Internal human-rated benchmark |

## 10. Safety, Trust, And Governance

Trust requirements:

- Be transparent when language confidence is low.
- Let users correct language/dialect detection.
- Never pretend to know local law, medicine, or finance with certainty.
- Use local expert review for sensitive knowledge packs.
- Store consent clearly for voice and community-contributed language samples.
- Show whether a response is translated, generated directly, or routed through another language.
- Keep user data private by default.

Community governance:

- Language councils by region.
- Native-speaker reviewers.
- Contributor reputation.
- Sensitive cultural content review.
- Dataset consent and removal process.

## 11. Metrics

Product metrics:

- Daily active users
- Returning users by language
- Voice usage rate
- Correction submission rate
- User-rated naturalness score
- Translation acceptance rate
- Conversation completion rate
- Share/export rate

AI quality metrics:

- Language detection accuracy
- Dialect detection accuracy
- Human naturalness rating
- Code-switching quality
- ASR word error rate by language
- Translation BLEU/chrF/COMET where appropriate
- Safety refusal accuracy
- Hallucination rate in local knowledge packs

## 12. MVP Roadmap

### Sprint 1: Discovery and Foundation

- Finalize product name and brand direction.
- Build full country-language-dialect registry.
- Verify model licenses.
- Select MVP languages.
- Create clickable design prototype.

### Sprint 2: Core Chat Prototype

- Build chat UI.
- Implement language/tone onboarding.
- Add model router abstraction.
- Connect one primary LLM.
- Connect one translation model.
- Add feedback and correction capture.

### Sprint 3: African Language Layer

- Integrate Masakhane/AfroLM/AfroXLMR resources for classification and evaluation.
- Add InkubaLM experiment for supported languages.
- Build tone post-processing.
- Add language confidence indicator.

### Sprint 4: Voice Layer

- Add speech input.
- Test MMS/SeamlessM4T/Simba options.
- Add speech playback where available.
- Run native-speaker evaluation.

### Sprint 5: Pilot

- Pilot in 3-5 countries.
- Collect human quality ratings.
- Improve language registry.
- Prepare V1 roadmap.

## 13. Key Sources

- Masakhane: https://www.masakhane.io/
- Masakhane Hugging Face: https://huggingface.co/masakhane
- InkubaLM blog: https://lelapa.ai/blog/inkubalm-small-language-model
- InkubaLM Hugging Face: https://huggingface.co/lelapa/InkubaLM-0.4B
- AfroLM paper page: https://huggingface.co/papers/2211.03263
- AfroLM model: https://huggingface.co/bonadossou/afrolm_active_learning
- AfriBERTa: https://huggingface.co/castorini/afriberta_base
- AfroXLMR base: https://huggingface.co/Davlan/afro-xlmr-base
- AfroXLMR large: https://huggingface.co/Davlan/afro-xlmr-large
- AfroXLMR-Social: https://huggingface.co/Tadesse/AfroXLMR-Social
- AfriNLLB: https://huggingface.co/AfriNLP/AfriNLLB-12enc-12dec-full-ft
- NLLB docs: https://huggingface.co/docs/transformers/model_doc/nllb
- MMS model: https://huggingface.co/facebook/mms-1b-all
- SeamlessM4T docs: https://huggingface.co/docs/transformers/en/model_doc/seamless_m4t
- Mozilla Common Voice: https://www.mozillafoundation.org/en/common-voice/platform-and-dataset/
- Simba-H: https://huggingface.co/UBC-NLP/Simba-H
- MasakhaNEWS: https://huggingface.co/datasets/masakhane/masakhanews
- AfriSenti: https://huggingface.co/datasets/masakhane/afrisenti
- AfriQA: https://huggingface.co/datasets/masakhane/afriqa
- NTREX African: https://huggingface.co/datasets/masakhane/ntrex_african
- Masakhane collections: https://huggingface.co/masakhane/collections
