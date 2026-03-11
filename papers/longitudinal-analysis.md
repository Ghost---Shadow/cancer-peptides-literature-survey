# Longitudinal Analysis: Cancer-Targeting Peptides for Lung Cancer (2014-2025)

A cross-cutting synthesis of 19 papers surveyed in this literature review, tracing the evolution of peptide-based strategies for lung cancer targeting, therapy, and drug delivery.

---

## Contents

1. [Peptide Discovery and Targeting](#1-peptide-discovery-and-targeting)
2. [Anticancer Peptides with Direct Activity](#2-anticancer-peptides-with-direct-activity)
3. [Peptide-Drug Conjugates and Delivery](#3-peptide-drug-conjugates-and-delivery)
4. [Nanoparticles and Delivery Platforms](#4-nanoparticles-and-delivery-platforms)
5. [Computational and AI-Driven Design](#5-computational-and-ai-driven-design)
6. [Reviews and Landscape Papers](#6-reviews-and-landscape-papers)
7. [Cross-Cutting Analysis](#7-cross-cutting-analysis)

---

## 1. Peptide Discovery and Targeting

Papers focused on identifying and optimizing peptides that specifically bind lung cancer cells.

---

### McGuire et al. (2014) — Tumor Targeting Peptides for NSCLC

- **Method**: Phage display biopanning using 3 libraries (7-mer, 12-mer, C7C) on live NSCLC cells
- **Output**: 11 novel NSCLC-targeting peptides with distinct binding profiles across a 40-cell-line panel
- **Key result**: Tetramer KD values of 0.0071-40 nM; binding correlates with EGFR/KRAS genotype
- **In vivo**: Confirmed tumor homing in xenograft models; validated on patient tumor samples
- **Significance**: Established the foundation for NSCLC peptide targeting; same group later optimized MGS4 → Allred 2023

> McGuire et al. (2014) Scientific Reports | [Nature](https://www.nature.com/articles/srep04480)

---

### Chi et al. (2017) — Lung Cancer-Targeting Peptides for Multi-Subtype Indication

- **Method**: Phage display biopanning with 12-mer library on H460 NSCLC cells
- **Peptides**: HSP1 (GAMHLPWHMGTL), HSP2 (NPWEEQGYRYSM), HSP4 (NNPWREMMYIEI)
- **Key result**: HSP4-liposomal doxorubicin extended median survival by 47 days (131 vs 84 d, p=0.0248)
- **Unique**: Only paper in survey targeting both SCLC and NSCLC (4 subtypes); only orthotopic lung model
- **Dual use**: Theranostic — peptides also enabled MRI tumor imaging (~42% signal reduction)

> Chi et al. (2017) Theranostics | [PMC5436516](https://pmc.ncbi.nlm.nih.gov/articles/PMC5436516/)

---

### Bakhshinejad & Nasiri (2018) — Novel Tumor-Binding Peptide LCP1

- **Method**: Ph.D.-7 phage display (7-mer library), 3 rounds on A549 cells
- **Peptide**: LCP1 (AWRTHTP) — 170-fold phage enrichment
- **Key result**: Selectivity index 5.1 (A549 vs normal lung WI-38); no binding to liver, esophageal, or breast cancer
- **Limitation**: In vitro only; receptor unknown; early-stage discovery
- **Significance**: Demonstrated lung cancer-specific targeting achievable with short 7-mer peptides

> Bakhshinejad & Nasiri (2018) IJPR | [PMC5937109](https://pmc.ncbi.nlm.nih.gov/articles/PMC5937109/)

---

### Furman et al. (2022) — Cyclic Peptides for EGFR/EGFRvIII

- **Method**: Phage display + next-generation sequencing (617,503 sequences screened computationally)
- **Peptides**: P6 (NSCLC-specific), P9 (glioblastoma); 7-mer cyclic format
- **Key result**: P9-camptothecin conjugate IC50 2.2 uM on H1299 — 2-3x more cytotoxic than free drug
- **Innovation**: First study combining phage display with NGS for massive parallel screening
- **Target**: EGFR wild-type and EGFRvIII mutant — relevant to both NSCLC and glioblastoma

> Furman et al. (2022) Pharmaceutics | [PMC9318536](https://pmc.ncbi.nlm.nih.gov/articles/PMC9318536/)

---

### Zhou et al. (2022) — NKTP-3 Cyclic D-Peptide for Dual Targeting

- **Method**: Structure-based computational design + virtual screening
- **Peptide**: NKTP-3 — cyclic D-peptide (protease-resistant, cell-permeable)
- **Key result**: Dual-targeting NRP1 (surface) + KRASG12D (intracellular); selective over KRAS-WT, G12C, G12V
- **In vivo**: Strong antitumor activity in A427 xenograft and primary lung cancer model; no obvious toxicity
- **Significance**: First peptide to simultaneously target a surface receptor AND an intracellular oncoprotein

> Zhou et al. (2022) JACS | [ACS](https://pubs.acs.org/doi/10.1021/jacs.1c12075)

---

### Allred et al. (2023) — Peptide-Guided Saporin Delivery to NSCLC

- **Method**: Phage display optimization — truncation, N-terminal acetylation, multimerization
- **Peptide**: MGS4_V8 (Ac-FHAVPQSFYT) — 10-amino-acid monomer
- **Key result**: EC50 < 40 nM on 4 NSCLC lines; MGS4_V8-saporin IC50 9.4 nM; >48 h serum stability
- **In vivo**: 25-40x tumor accumulation; ~50% tumor reduction (p<0.01); retained 72 h
- **Lineage**: Direct continuation of McGuire 2014 — same group (SRI International), same peptide family

> Allred et al. (2023) Communications Biology | [PMC9845330](https://pmc.ncbi.nlm.nih.gov/articles/PMC9845330/)

---

## Contents

1. ~~Peptide Discovery and Targeting~~
2. **Anticancer Peptides with Direct Activity**
3. Peptide-Drug Conjugates and Delivery
4. Nanoparticles and Delivery Platforms
5. Computational and AI-Driven Design
6. Reviews and Landscape Papers
7. Cross-Cutting Analysis

---

## 2. Anticancer Peptides with Direct Activity

Papers where the peptide itself is the therapeutic agent — killing cancer cells through membrane disruption, apoptosis, or anti-angiogenesis.

---

### Shin et al. (2022) — AC-P19M: De Novo Designed Anticancer Peptide

- **Method**: Computational de novo design; CancerPPD database mining + AI prediction (mACPpred, ACPred, ENNACT)
- **Peptide**: AC-P19M (net charge +9, alpha-helical)
- **Key result**: IC50 ~10-15 uM on A549/H460; no toxicity at 100 uM in normal cells (BEAS-2B, hADMSCs)
- **Multi-target**: Apoptosis induction + membrane disruption + near-complete VEGFR2 suppression + anti-EMT
- **Significance**: Early example of AI-assisted peptide design with multi-mechanism anticancer activity

> Shin et al. (2022) Int J Mol Sci | [PMC9779372](https://pmc.ncbi.nlm.nih.gov/articles/PMC9779372/)

---

### Yang et al. (2022) — K4F6K4 Triblock Amphiphilic Peptide

- **Method**: Rational triblock design (Lys-Phe-Lys); structure-activity optimization across K2F6K2 to K4F8K4
- **Peptide**: K4F6K4 (KKKK-FFFFFF-KKKK) — simple 14-residue design
- **Key result**: IC50 62.6 ug/mL on A549; **81.6% tumor volume reduction** at Day 28 in vivo
- **Selectivity**: 12.9x over normal MRC-5 lung fibroblasts; no in vivo toxicity observed
- **Mechanism**: Membrane disruption via amphiphilic self-assembly — fundamentally different from receptor-targeting

> Yang et al. (2022) Pharmaceutics | [PMC9143638](https://pmc.ncbi.nlm.nih.gov/articles/PMC9143638/)

---

## Contents

1. ~~Peptide Discovery and Targeting~~
2. ~~Anticancer Peptides with Direct Activity~~
3. **Peptide-Drug Conjugates and Delivery**
4. Nanoparticles and Delivery Platforms
5. Computational and AI-Driven Design
6. Reviews and Landscape Papers
7. Cross-Cutting Analysis

---

## 3. Peptide-Drug Conjugates and Delivery

Papers where peptides deliver cytotoxic payloads or act as drug carriers targeting lung cancer.

---

### Mudd et al. (2022) — BT8009 Bicycle Toxin Conjugate (Nectin-4)

- **Method**: Phage display-derived bicycle peptide constrained by TATA scaffold; non-natural amino acids
- **Conjugate**: BT8009 (zelenectide pevedotin) — ~4 kDa bicycle peptide + Val-Cit linker + MMAE
- **Key result**: KD 2.8 nM (SPR); near-complete tumor regression by Day 18 in xenograft (3 mg/kg 2x/week)
- **Stage**: **Phase I/II clinical trial** — most advanced peptide therapeutic in survey
- **Significance**: Achieves antibody-like affinity at 1/30th the molecular weight; first-in-class BTC for Nectin-4

> Mudd et al. (2022) J Med Chem | [PMC9661471](https://pmc.ncbi.nlm.nih.gov/articles/PMC9661471/)

---

### Singh et al. (2025) — SFTI-G5: First Oral EGFR-Targeting Peptide

- **Method**: Scaffold grafting — EGFR-binding epitope grafted into SFTI-1 sunflower trypsin inhibitor (14 aa bicyclic)
- **Peptide**: SFTI-G5 — Cyclo(C(S-X)RIPPR(S-X)CFPDDF) with non-natural Anapa residues
- **Key result**: IC50 73 nM (Calu-3 NSCLC); >500-fold selectivity over normal cells; **oral bioavailability confirmed**
- **In vivo**: Significant tumor growth delay (p<0.001) in Calu-3 xenograft + experimental metastasis model
- **Significance**: First orally available anticancer peptide targeting EGFR/HER2 dimerization — paradigm shift

> Singh et al. (2025) ACS Pharmacol Transl Sci | [ACS](https://pubs.acs.org/doi/10.1021/acsptsci.5c00336)

---

## Contents

1. ~~Peptide Discovery and Targeting~~
2. ~~Anticancer Peptides with Direct Activity~~
3. ~~Peptide-Drug Conjugates and Delivery~~
4. **Nanoparticles and Delivery Platforms**
5. Computational and AI-Driven Design
6. Reviews and Landscape Papers
7. Cross-Cutting Analysis

---

## 4. Nanoparticles and Delivery Platforms

Reviews covering peptide-functionalized nanoparticles and nanocarrier systems for lung cancer.

---

### Kim & Park (2024) — Functionalized Peptides in Nanomedicine

- **Scope**: Three peptide-NP strategies — targeting ligands, self-assembling peptides, stimuli-responsive systems
- **Lung cancer example**: CPP33 (RLWMRWYSPRTRAYG) + ZIF-90 MOF + survivin siRNA + Oridonin
- **Key finding**: CPP33-ZIF-90 system showed preferential uptake in A549 cells and reduced tumor growth in vivo
- **Platforms covered**: Metal-organic frameworks, gold NPs, mesoporous silica, liposomes, polymeric NPs

> Kim & Park (2024) Biomedicines | [PMC10813321](https://pmc.ncbi.nlm.nih.gov/articles/PMC10813321/)

---

### Lee et al. (2025) — Engineered Nanocarriers for Lung Cancer

- **Scope**: Comprehensive nanocarrier landscape for lung cancer — liposomes, PLGA, dendrimers, exosomes, inorganic NPs
- **Clinical highlight**: T-DXd (trastuzumab deruxtecan) — ~55% response rate in HER2-mutant NSCLC (approved)
- **Innovation**: Inhalable nanoparticle systems for direct pulmonary deposition; stimuli-responsive (pH, enzyme, hypoxia)
- **Trend**: Field moving toward inhalable delivery routes that bypass systemic circulation for lung-specific targeting

> Lee et al. (2025) Explor Target Antitumor Ther | [PMC12531643](https://pmc.ncbi.nlm.nih.gov/articles/PMC12531643/)

---

## Contents

1. ~~Peptide Discovery and Targeting~~
2. ~~Anticancer Peptides with Direct Activity~~
3. ~~Peptide-Drug Conjugates and Delivery~~
4. ~~Nanoparticles and Delivery Platforms~~
5. **Computational and AI-Driven Design**
6. Reviews and Landscape Papers
7. Cross-Cutting Analysis

---

## 5. Computational and AI-Driven Design

Papers on computational methods, AI/ML models, and rational scaffold engineering for anticancer peptides.

---

### Wu et al. (2025) — AI-Driven Anticancer Peptide Discovery

- **Scope**: Comprehensive review of 68 AI-based ACP prediction models
- **Databases**: CancerPPD, ApInAPDB, SATPdb, DBAASP (lung cancer lines A549/H460/H1299 in training data)
- **Models**: SVM, Random Forest, CNN, LSTM, Transformer, ProtBERT, ESM language models
- **Framework**: 4-stage pipeline — data curation → feature extraction + training → interpretability → wet-lab validation
- **Gap**: Most of 68 models lack experimental validation; no AI-discovered ACP has reached clinical trials

> Wu et al. (2025) iMetaOmics | [Wiley](https://onlinelibrary.wiley.com/doi/full/10.1002/imo2.70063)

---

### Chowdhury et al. (2025) — Molecular Chimera: Grafted Stable Peptides

- **Concept**: "Molecular chimeras" — plant-derived scaffolds (cyclotides, SFTI-1) grafted with cancer-targeting epitopes
- **Scaffolds**: Cyclotides (28-37 aa, cyclic cystine knot, 3 disulfide bonds) and SFTI-1 (14 aa, bicyclic)
- **Targets covered**: EGFR, HER2, PD-L1, VEGF, integrins, p53-HDM2
- **Key advantage**: Oral bioavailability from scaffold stability — validated experimentally by Singh et al. (SFTI-G5)
- **Lineage**: Same group (Jois lab, LSU) as Singh 2025; this review provides the theoretical framework

> Chowdhury et al. (2025) Int J Pept Res Ther | [Springer](https://link.springer.com/article/10.1007/s10989-025-10690-6)

---

## Contents

1. ~~Peptide Discovery and Targeting~~
2. ~~Anticancer Peptides with Direct Activity~~
3. ~~Peptide-Drug Conjugates and Delivery~~
4. ~~Nanoparticles and Delivery Platforms~~
5. ~~Computational and AI-Driven Design~~
6. **Reviews and Landscape Papers**
7. Cross-Cutting Analysis

---

## 6. Reviews and Landscape Papers

Broad reviews covering the peptide-based cancer therapy landscape, with lung cancer relevance.

---

### Karankar et al. (2025) — Peptide-Driven Strategies Against Lung Cancer

- **Scope**: Comprehensive review of peptides targeting 6 NSCLC driver mutations: EGFR, TP53, BRAF, MET, ROS1, ALK
- **Key peptides**: GE11 (EGFR-binding), p28 (azurin fragment for p53), NKTP-3 (KRASG12D)
- **Insight**: Peptides positioned as bridge between small-molecule TKIs and antibodies; potential for TKI-resistant tumors
- **Gaps identified**: No peptides yet targeting ALK, ROS1, or MET fusions

> Karankar et al. (2025) Life Sciences | [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0024320525000864)

---

### Karati et al. (2025) — Peptide Drugs Overcoming Lung Cancer Chemoresistance

- **Scope**: How ACPs bypass chemoresistance mechanisms in NSCLC
- **Key insight**: ACPs bypass P-glycoprotein efflux through direct membrane disruption — fundamentally different from conventional drugs
- **Mechanisms**: Target DNA repair, EMT, apoptosis evasion pathways simultaneously
- **Challenge**: Short half-life remains the primary practical limitation of peptide therapeutics

> Karati et al. (2025) Int J Pept Res Ther | [Springer](https://link.springer.com/article/10.1007/s10989-025-10767-2)

---

### Nhan et al. (2023) — Peptide-Based Agents for Cancer Treatment

- **Scope**: Broadest review — 56 pre-clinical + 10 clinical-stage peptides across cancer types
- **Clinical examples**: LUNA18 (KRAS, Phase I/II), p28 (p53, Phase I), ALRN-6924 (Phase I/II)
- **Lung-relevant**: NKTP-3, KRpep-2d (KRASG12D), 99mTc-3PRGD2 (integrin imaging)
- **Historical context**: FDA approvals — Leuprorelin (1985), Octreotide (1998), Carfilzomib (2012)

> Nhan et al. (2023) Int J Mol Sci | [PMC10454368](https://pmc.ncbi.nlm.nih.gov/articles/PMC10454368/)

---

### Alamdari-palangi et al. (2023) — Peptide-Agent Conjugates for Tumors

- **Scope**: PDC landscape — design principles, linker chemistry, 28 clinical trials cataloged
- **Lung-relevant**: DTX-P7 (Hsp90/docetaxel), ANG1005 (LRP1/3x paclitaxel), CIGB-300 (CK2 inhibitor, IC50 ~30 uM)
- **Scale**: 60+ approved peptide therapeutics; 12 FDA/EMA-approved cancer drugs
- **BT8009**: Featured as key example of next-generation peptide conjugate design

> Alamdari-palangi et al. (2023) J Cancer Res Clin Oncol | [PMC11797435](https://pmc.ncbi.nlm.nih.gov/articles/PMC11797435/)

---

### Bauso et al. (2024) — Natural and Synthetic Anticancer Peptides

- **Scope**: ACPs across 10 cancer types; **7 lung cancer peptides with full sequences cataloged**
- **Lung peptides**: MANS (Myr-GAQFSKTAAKGEAAAERPGEAAVA), FCHO1, TMEM39AS41, MP06, AC-P19M, DTX-P7
- **Key stat**: >1,000 clinical trials using ACPs globally
- **Insight**: AC-P19M shows 5-fold more toxicity to cancer vs. normal cells

> Bauso et al. (2024) Int J Mol Sci | [PMC11242495](https://pmc.ncbi.nlm.nih.gov/articles/PMC11242495/)

---

## Contents

1. ~~Peptide Discovery and Targeting~~
2. ~~Anticancer Peptides with Direct Activity~~
3. ~~Peptide-Drug Conjugates and Delivery~~
4. ~~Nanoparticles and Delivery Platforms~~
5. ~~Computational and AI-Driven Design~~
6. ~~Reviews and Landscape Papers~~
7. **Cross-Cutting Analysis**

---

## 7. Cross-Cutting Analysis

### Method Evolution (2014 → 2025)

| Era | Years | Approach | Papers |
|-----|-------|----------|--------|
| Phage display | 2014-2018 | Cell-based biopanning, iterative selection | McGuire, Chi, Bakhshinejad |
| NGS + computation | 2022 | Phage display enhanced with sequencing; virtual screening | Furman, Zhou |
| De novo design | 2022 | AI-predicted sequences; rational amphiphilic design | Shin, Yang |
| Scaffold engineering | 2025 | Plant-derived scaffolds grafted with targeting epitopes | Singh, Chowdhury |
| AI/ML at scale | 2025 | 68 models; language models; end-to-end frameworks | Wu |

### Target Landscape

| Target | Frequency | Most Advanced Peptide | Stage |
|--------|-----------|----------------------|-------|
| EGFR/HER2 | 8 papers | SFTI-G5 (oral, IC50 73 nM) | Pre-clinical |
| Nectin-4 | 2 papers | BT8009-MMAE | **Phase I/II** |
| KRAS G12D | 4 papers | NKTP-3 (dual-target), LUNA18 | Phase I/II |
| p53/HDM2 | 2 papers | p28 (azurin) | Phase I |
| PD-1/PD-L1 | 3 papers | Cyclotide grafts (conceptual) | Early research |
| KRAS G12C | 0 papers | — | **Gap** |
| ALK/ROS1/MET | 0 papers | — | **Gap** |

### Quantitative Efficacy — Top Performers

| Metric | Best Result | Peptide | Paper |
|--------|-------------|---------|-------|
| Binding affinity | KD 0.0071 nM | McGuire tetramers | McGuire 2014 |
| In vitro IC50 | 9.4 nM (with saporin) | MGS4_V8-saporin | Allred 2023 |
| In vitro IC50 (free peptide) | 73 nM | SFTI-G5 | Singh 2025 |
| Tumor volume reduction | -81.6% (Day 28) | K4F6K4 | Yang 2022 |
| Survival extension | +47 days median | HSP4-PLD | Chi 2017 |
| Selectivity | >500-fold | SFTI-G5 | Singh 2025 |
| Tumor regression | Near-complete (Day 18) | BT8009-MMAE | Mudd 2022 |

### Clinical Translation Pipeline

| Stage | Papers | Key Compounds |
|-------|--------|---------------|
| Discovery / in vitro | Bakhshinejad 2018, Shin 2022, Furman 2022 | LCP1, AC-P19M, P6/P9 |
| In vivo (xenograft) | Chi 2017, McGuire 2014, Yang 2022, Zhou 2022, Allred 2023, Singh 2025 | HSP4, K4F6K4, NKTP-3, MGS4_V8, SFTI-G5 |
| Clinical trials | Mudd 2022 | BT8009 (Phase I/II) |
| AI (computational only) | Wu 2025 | 68 models, no clinical validation |

### Cross-Reference Network

```
McGuire 2014 ──────→ Allred 2023          (same group, same peptide family)
Singh 2025 ←────────→ Chowdhury 2025       (same group, SFTI scaffold)
Shin 2022 ──────────→ Wu 2025              (AI tools → AI landscape review)
Furman + Zhou 2022 ──→ Karankar 2025       (EGFR/KRAS peptides → review)
Chi 2017 + Allred 2023 → Lee 2025          (delivery methods → nanocarrier review)
Yang + Shin 2022 ───→ Bauso 2024           (ACPs → cataloged in review)
Mudd 2022 ──────────→ Alamdari 2023        (BT8009 → PDC review)
```

### Key Gaps

| Gap | Description |
|-----|-------------|
| KRAS G12C | Most common KRAS mutation in NSCLC smokers; no peptide in survey |
| SCLC | Only Chi 2017 addresses SCLC; aggressive subtype with no targeted therapies |
| ALK/ROS1/MET | Mentioned in reviews but zero experimental peptides |
| Orthotopic models | Only Chi 2017 uses orthotopic lung model; all others use subcutaneous |
| Head-to-head | No paper compares peptides against standard-of-care antibodies or TKIs |
| AI validation | 68 models, most without wet-lab confirmation |
| Combination therapy | No studies combining peptides with immunotherapy |

### Five Emerging Opportunities

1. **Oral peptide therapeutics** — SFTI-G5 proves oral bioavailability is achievable; generalizing to other targets could transform patient compliance
2. **AI-to-clinic** — First AI-discovered ACP to reach clinical trials will validate the entire computational field (Wu 2025)
3. **Peptide-immunotherapy** — PD-L1-targeting cyclotide grafts (Chowdhury 2025) could synergize with checkpoint inhibitors
4. **Inhalable delivery** — Direct pulmonary deposition (Lee 2025) concentrates peptides in lung tumors, bypassing systemic distribution
5. **Dual-target peptides** — NKTP-3 (Zhou 2022) proves simultaneous surface + intracellular targeting is feasible

---

## References

All 19 papers in this survey:

| # | Citation | Year |
|---|----------|------|
| 1 | [Chi et al. — Lung Cancer-Targeting Peptides](chi-2017-lung-cancer-targeting-peptides.md) | 2017 |
| 2 | [Karankar et al. — Peptide-Driven Strategies](karankar-2025-peptide-driven-strategies-lung-cancer.md) | 2025 |
| 3 | [Karati et al. — Peptide Drugs & Chemoresistance](karati-2025-peptide-drugs-lung-cancer-chemoresistance.md) | 2025 |
| 4 | [Nhan et al. — Peptide-Based Agents](nhan-2023-peptide-agents-cancer-treatment.md) | 2023 |
| 5 | [McGuire et al. — Tumor Targeting Peptides](mcguire-2014-tumor-targeting-peptides-nsclc.md) | 2014 |
| 6 | [Bakhshinejad et al. — LCP1 Peptide](bakhshinejad-2018-novel-tumor-binding-peptide-lung-cancer.md) | 2018 |
| 7 | [Furman et al. — Cyclic Peptides EGFR](furman-2022-cyclic-peptides-egfr-egfrviii.md) | 2022 |
| 8 | [Zhou et al. — NKTP-3 D-Peptide](zhou-2022-nktp3-cyclic-dpeptide-lung-cancer.md) | 2022 |
| 9 | [Shin et al. — AC-P19M](shin-2022-acp19m-anticancer-peptide-lung-cancer.md) | 2022 |
| 10 | [Yang et al. — K4F6K4 Triblock](yang-2022-triblock-amphiphilic-peptides-lung-adenocarcinoma.md) | 2022 |
| 11 | [Bauso et al. — Natural & Synthetic ACPs](bauso-2024-natural-synthetic-anticancer-peptides.md) | 2024 |
| 12 | [Mudd et al. — BT8009 BTC](mudd-2022-bt8009-bicycle-toxin-conjugate-nectin4.md) | 2022 |
| 13 | [Singh et al. — SFTI-G5 Oral Peptide](singh-2025-oral-egfr-grafted-peptide-nsclc.md) | 2025 |
| 14 | [Alamdari-palangi et al. — Peptide-Agent Conjugates](alamdari-2023-peptide-agent-conjugates-tumor-targeting.md) | 2023 |
| 15 | [Kim et al. — Peptides in Nanomedicine](kim-2024-functionalized-peptides-nanomedicine-cancer.md) | 2024 |
| 16 | [Lee et al. — Nanocarriers for Lung Cancer](lee-2025-engineered-nanocarriers-lung-cancer.md) | 2025 |
| 17 | [Allred et al. — MGS4_V8 Saporin Delivery](allred-2023-peptide-guided-saporin-delivery-nsclc.md) | 2023 |
| 18 | [Wu et al. — AI-Driven ACP Discovery](wu-2025-ai-driven-anticancer-peptide-discovery.md) | 2025 |
| 19 | [Chowdhury et al. — Molecular Chimera](chowdhury-2025-molecular-chimera-grafted-peptides-cancer.md) | 2025 |
