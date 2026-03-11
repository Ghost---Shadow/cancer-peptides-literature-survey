# Artificial Intelligence-Driven Anticancer Peptide Discovery

## Paper Metadata

| Field | Details |
|-------|---------|
| **Authors** | Junrui Wu, Shuaiqi Ji, Kashif Iqbal Sahibzada, Mengxue Lou, Feiyu An, Wenqian Li, Jiawei Guo, Taowei Zhang, Xinyi Zhang, Yilin Chou, Henan Zhang, Hao Jin, Teng Ma, Weichi Liu, Begali Alikulov, Natalia Alekseevna Golovneva, Hooi Ling Foo, Issayeva Kuralay, Zhihong Sun, Dongqing Wei, Rina Wu |
| **Affiliation** | Shenyang Agricultural University; Inner Mongolia Agricultural University; Shanghai Jiao Tong University; Henan University of Technology; University of Lahore; Samarkand State University; National Academy of Sciences of Belarus; Universiti Putra Malaysia; Toraighyrov University |
| **Journal** | iMetaOmics (Wiley) |
| **Year** | 2025 |
| **Volume/Pages** | 2(4), e70063 |
| **DOI** | [10.1002/imo2.70063](https://doi.org/10.1002/imo2.70063) |
| **Type** | Review Article |

## Summary

This comprehensive review surveys 68 AI-based anticancer peptide (ACP) prediction models and proposes a complete AI-driven ACP screening framework. The framework covers dataset construction, feature extraction, model training and optimization, interpretability analysis, and wet-laboratory validation. The review also discusses integration with multi-omics, synthetic biology, amino acid modification, and nanodelivery technologies to bridge the gap from computational prediction to clinical application.

## Background & Motivation

- Cancer remains a leading cause of death worldwide; current therapies face limitations in drug resistance, toxicity, and off-target effects
- ACPs offer high selectivity, low toxicity, and multitarget effects, making them promising candidates for novel anticancer drugs
- Traditional ACP screening (enzymatic hydrolysis, chemical synthesis, phage display) is constrained by low efficiency, high costs, and technical complexity
- AI provides new possibilities for large-scale ACP screening, but most models remain at the prediction stage without experimental validation
- No comprehensive framework existed connecting AI-based ACP prediction to clinical translation

## Key Topics Covered

### ACP Databases

| Database | Description |
|----------|-------------|
| CancerPPD | Dedicated ACP database with amino acid sequences and bioactivities across cancer types |
| ApInAPDB | 818 known apoptosis-inducing ACPs, manually curated from literature |
| SATPdb | Integrates data from 22 existing peptide databases |
| DBAASP | Contains over 19,000 peptide sequences, 7000+ with defined activity |
| Additional | AntiCP2, iACP-DRLF, ACPred-FL, and others used as training sources |

### Feature Extraction Methods

- **Sequence-based features**: Amino acid composition (AAC), dipeptide composition (DPC), pseudo-amino acid composition (PseAAC), composition-transition-distribution (CTD)
- **Physicochemical features**: Molecular weight, hydrophobicity, charge, isoelectric point, amphipathicity
- **Structural features**: Secondary structure prediction, 3D conformation (computationally expensive, limits large-scale use)
- **Embedding-based features**: Word2Vec, ProtBERT, ESM protein language models for contextual representations

### Machine Learning Models Surveyed (68 total)

| Model Category | Examples | Key Characteristics |
|---------------|----------|---------------------|
| Traditional ML | SVM, Random Forest, XGBoost, KNN | Effective for small datasets, interpretable |
| Deep Learning | CNN, RNN, LSTM, Transformer | Better at capturing complex sequence patterns |
| Ensemble Methods | Stacking, bagging, boosting | Combine multiple models for improved accuracy |
| Hybrid Models | CNN-LSTM, GAN-augmented | Leverage both local and sequential features |
| Language Models | BERT-based, GPT-based | Pre-trained on large protein corpora, transfer learning |

- **Evaluation metrics**: Accuracy (ACC), AUC, Matthews correlation coefficient (MCC), sensitivity (Sn), specificity (Sp), F1 score
- **Training strategies**: k-fold cross-validation (commonly 5- or 10-fold), independent test sets

### Key Validated ACPs from AI Screening

- Some AI-predicted ACPs have been successfully identified from food-derived peptide libraries, novel protein sources, and synthetic peptide libraries
- Wet-laboratory validation (MTT/CCK-8 assays, flow cytometry, animal models) remains critical but is performed in only a minority of published models

## AI-Driven ACP Screening Framework (Proposed)

The authors propose a 4-stage framework:

1. **Data collection and organization**: Curate from public databases (CancerPPD, SATPdb, DBAASP), balance positive/negative samples, standardize formats
2. **Feature extraction and model training**: Multi-level feature encoding (sequence + physicochemical + structural), model selection and hyperparameter optimization, cross-validation
3. **Interpretability and validation**: SHAP/attention mechanism analysis for model transparency, wet-lab validation of top candidates
4. **Clinical translation pipeline**: Integration with multi-omics for target identification, synthetic biology for scalable production, amino acid modifications for stability, nanodelivery systems for bioavailability

## Integration Technologies

- **Multi-omics**: Proteomics, peptidomics, transcriptomics, and metabolomics provide ACP candidate libraries and enrich natural ACP sources
- **Synthetic biology**: Heterologous expression systems (E. coli, yeast, plant) for scalable ACP production; cell-free protein synthesis for rapid prototyping
- **Amino acid modifications**: D-amino acid substitution, cyclization, PEGylation, lipidation, glycosylation to enhance stability, bioavailability, and target specificity
- **Nanodelivery systems**: Liposomes, polymeric nanoparticles, inorganic carriers to overcome protease degradation and membrane permeability barriers

## Significance

- First comprehensive review summarizing 68 AI-based ACP prediction models with systematic comparison
- Proposes an end-to-end framework from data curation through clinical translation
- Highlights the critical gap between computational prediction and experimental validation
- Identifies integration of AI with multi-omics, synthetic biology, and nanodelivery as key to clinical translation
- Relevant to lung cancer: ACPs targeting lung cancer cell lines (A549, H460, H1299) feature prominently in training datasets and validation studies

## Limitations

- Most of the 68 models reviewed lack wet-laboratory validation; predictions remain largely computational
- Training datasets suffer from class imbalance (more non-ACPs than ACPs) and benchmark dataset overlap across studies
- Structural feature extraction is computationally expensive, limiting its use in large-scale screening
- Cancer type-specific prediction remains underdeveloped; most models predict general ACP activity rather than targeting specific cancers (e.g., lung cancer)
- No standardized benchmarking protocol exists across different ACP models, making fair comparison difficult
- Clinical translation pathway for AI-predicted ACPs is largely theoretical; no AI-discovered ACP has reached clinical trials
- Review does not include quantitative meta-analysis of model performance across the 68 models

## Tags

`anticancer peptides` `artificial intelligence` `machine learning` `deep learning` `peptide prediction` `ACP screening` `drug discovery` `multi-omics` `nanodelivery` `synthetic biology` `feature extraction` `computational design` `review` `lung cancer`
