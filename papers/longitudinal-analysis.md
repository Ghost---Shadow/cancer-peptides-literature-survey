# Longitudinal Analysis: Cancer-Targeting Peptides for Lung Cancer (2014-2025)

A cross-cutting synthesis of 19 papers surveyed in this literature review, tracing the evolution of peptide-based strategies for lung cancer targeting, therapy, and drug delivery.

---

## 1. Survey Overview

| Metric | Value |
|--------|-------|
| Papers surveyed | 19 |
| Year range | 2014-2025 |
| Original research | 9 papers |
| Review articles | 10 papers |
| Lung cancer-specific | 18/19 papers |
| NSCLC focus | 15/19 papers |
| Unique peptides named | 40+ |
| Clinical-stage compounds | 2 (BT8009, LUNA18) |

### Papers by Year

| Year | Count | Papers |
|------|-------|--------|
| 2014 | 1 | McGuire (targeting peptides) |
| 2017 | 1 | Chi (multi-subtype targeting) |
| 2018 | 1 | Bakhshinejad (LCP1 peptide) |
| 2022 | 5 | Furman, Zhou, Shin, Yang, Mudd |
| 2023 | 3 | Nhan, Alamdari-palangi, Allred |
| 2024 | 2 | Bauso, Kim |
| 2025 | 6 | Karankar, Karati, Singh, Lee, Wu, Chowdhury |

The field shows two activity peaks: a burst of original research in 2022 (5 papers) and a wave of reviews and translational studies in 2025 (6 papers), suggesting the field is maturing from discovery into synthesis and clinical translation.

---

## 2. Evolution of Discovery Methods

The methodological landscape has shifted dramatically over the decade:

### Phase 1: Phage Display Era (2014-2018)

| Paper | Method | Library | Output |
|-------|--------|---------|--------|
| McGuire 2014 | Phage display, 3 libraries | 7-mer, 12-mer, C7C | 11 NSCLC-targeting peptides, sub-nM KD |
| Chi 2017 | Phage display biopanning | 12-mer | HSP1/HSP2/HSP4, multi-subtype binding |
| Bakhshinejad 2018 | Ph.D.-7 phage display | 7-mer | LCP1 (AWRTHTP), 170-fold enrichment |

Characteristics: Cell-based panning on live cancer cells, iterative selection (3-4 rounds), validation by ELISA/flow cytometry. Strengths in generating truly cell-binding sequences but limited by library diversity and laborious screening.

### Phase 2: Computational + NGS-Guided (2022-2023)

| Paper | Method | Innovation |
|-------|--------|------------|
| Furman 2022 | Phage display + NGS | 617,503 sequences screened computationally |
| Zhou 2022 | Structure-based virtual screening | Cyclic D-peptide targeting intracellular KRASG12D |
| Shin 2022 | De novo computational design | CancerPPD mining + AI prediction (mACPpred, ACPred) |
| Allred 2023 | Phage display + systematic optimization | Truncation/acetylation/multimerization pipeline |

Transition period: Phage display enhanced with next-generation sequencing (Furman) and computational docking. Purely computational approaches emerge (Zhou, Shin) enabling access to intracellular targets previously unreachable by phage display.

### Phase 3: AI/ML and Scaffold Engineering (2024-2025)

| Paper | Method | Innovation |
|-------|--------|------------|
| Singh 2025 | Scaffold grafting (SFTI-1) + MD simulation | First oral peptide targeting EGFR dimerization |
| Wu 2025 | AI/ML models (68 surveyed) | End-to-end ACP screening framework |
| Chowdhury 2025 | Molecular chimera design | Cyclotide/SFTI grafting with cancer epitopes |

Current frontier: AI-driven prediction using protein language models (ProtBERT, ESM), generative models, and integration with multi-omics. Scaffold engineering (cyclotides, SFTI-1) enables oral bioavailability — a paradigm shift from injectable peptides.

---

## 3. Molecular Target Landscape

### Target Frequency Across Papers

| Target | Papers Mentioning | Key Peptides | Clinical Status |
|--------|-------------------|-------------|-----------------|
| **EGFR** | 8 (Chi, McGuire, Furman, Karankar, Singh, Chowdhury, Lee, Alamdari) | GE11, P6, SFTI-G5 | SFTI-G5 pre-clinical |
| **HER2** | 5 (Singh, Chowdhury, Lee, Karankar, Kim) | SFTI-G5 (dual EGFR/HER2) | T-DXd approved (ADC) |
| **KRAS** | 4 (Zhou, Nhan, Karankar, Bauso) | NKTP-3, KRpep-2d, LUNA18 | LUNA18 Phase I/II |
| **NRP1** | 2 (Zhou, Nhan) | NKTP-3 (dual NRP1+KRASG12D) | Pre-clinical |
| **Nectin-4** | 2 (Mudd, Lee) | BT8009 (zelenectide pevedotin) | **Phase I/II clinical trial** |
| **PD-1/PD-L1** | 3 (Chowdhury, Karankar, Lee) | Grafted cyclotide candidates | Early research |
| **VEGF/VEGFR** | 3 (Shin, Chowdhury, Nhan) | AC-P19M (anti-angiogenic) | Pre-clinical |
| **p53/HDM2** | 2 (Karankar, Chowdhury) | p28 (azurin fragment) | Phase I (NCT00914914) |
| **Integrins (RGD)** | 3 (Nhan, Kim, Chowdhury) | iRGD, RGD-4C, 99mTc-3PRGD2 | Imaging clinical trials |

### Key Insight: Target Evolution

Early work (2014-2018) used unbiased phage display, identifying peptides binding unknown receptors on cancer cell surfaces. By 2022, the field shifted to rationally designed peptides against validated oncology targets (EGFR, KRAS, Nectin-4). The 2025 papers show convergence on targets with established clinical precedent (EGFR/HER2 dimerization, PD-L1), leveraging peptides as alternatives to expensive antibody therapies.

---

## 4. Peptide Design Strategy Evolution

### Linear to Engineered: A Decade of Structural Innovation

| Generation | Years | Strategy | Examples | Advantages |
|-----------|-------|----------|----------|------------|
| 1st | 2014-2018 | Linear peptides from phage display | HSP1/2/4, LCP1, McGuire peptides | Simple, direct selection |
| 2nd | 2022 | Cyclic peptides | Furman P6/P9, Zhou NKTP-3 | Improved stability, target selectivity |
| 2nd | 2022 | D-amino acid incorporation | NKTP-3 (cyclic D-peptide) | Protease resistance, cell permeability |
| 2nd | 2022 | De novo designed | AC-P19M (net charge +9) | Multi-target by design |
| 2nd | 2022 | Amphiphilic block peptides | K4F6K4 (triblock Lys-Phe-Lys) | Membrane disruption, high selectivity |
| 3rd | 2022-2023 | Peptide-toxin/drug conjugates | BT8009-MMAE, MGS4_V8-saporin, DTX-P7 | Targeted payload delivery |
| 3rd | 2022 | Bicycle peptides | BT8009 (constrained by TATA scaffold) | Antibody-like affinity, small MW |
| 4th | 2025 | Scaffold-grafted chimeras | SFTI-G5, cyclotide grafts | Oral bioavailability, ultra-stability |
| 4th | 2025 | AI-designed peptides | 68 models surveyed (Wu 2025) | High-throughput screening |

### Stability Solutions Across Papers

| Challenge | Solution | Paper(s) | Result |
|-----------|----------|----------|--------|
| Serum degradation | N-terminal acetylation | Allred 2023 | >48 h stability |
| Proteolysis | D-amino acids | Zhou 2022 | Biostable, cell-permeable |
| Proteolysis | Cyclization | Furman 2022, Singh 2025, Mudd 2022 | Extended half-life |
| Proteolysis | Disulfide-rich scaffolds (CCK motif) | Chowdhury 2025, Singh 2025 | Oral stability |
| Short half-life | Nanocarrier encapsulation | Kim 2024, Lee 2025 | Sustained release |
| P-gp efflux | Membrane-disrupting ACPs | Karati 2025 | Bypass resistance |

---

## 5. Drug Delivery Platform Comparison

### Delivery Strategies Across the Survey

| Platform | Paper(s) | Payload | MW Range | Key Advantage |
|----------|----------|---------|----------|---------------|
| **Free peptide** | Shin 2022, Yang 2022, Zhou 2022 | Peptide IS the drug | 1-3 kDa | Simplest, direct action |
| **Peptide-liposome** | Chi 2017 | Doxorubicin | ~100 nm | EPR effect, proven platform |
| **PDC (peptide-drug conjugate)** | Furman 2022, Alamdari 2023 | Camptothecin, docetaxel, paclitaxel | 2-5 kDa | Small size, tumor penetration |
| **Peptide-protein toxin** | Allred 2023 | Saporin (RIP) | ~35 kDa (conjugate) | Catalytic killing (1 molecule = many ribosomes) |
| **Bicycle toxin conjugate** | Mudd 2022 | MMAE | ~4 kDa | Antibody-like affinity at 1/30th size |
| **Peptide-MOF** | Kim 2024 | siRNA + Oridonin | ~200 nm | Dual drug + gene delivery |
| **Peptide-NP (various)** | Kim 2024, Lee 2025 | Multiple | 10-200 nm | Stimuli-responsive release |
| **Oral scaffold peptide** | Singh 2025 | Peptide IS the drug (grafted SFTI) | ~1.6 kDa | Oral bioavailability |
| **Inhalable NP** | Lee 2025 | Various | Variable | Direct pulmonary deposition |

### Key Trend: Miniaturization and Simplification

The field is moving from complex nanoparticle formulations toward simpler, more drug-like peptide formats. BT8009 (~4 kDa) achieves antibody-like targeting in a molecule 1/30th the size of an antibody. SFTI-G5 (~1.6 kDa) achieves oral bioavailability without any delivery vehicle. This trajectory suggests future peptide therapeutics may be administered as simple oral pills rather than IV infusions.

---

## 6. Quantitative Efficacy Comparison

### Best In Vitro Results (IC50/EC50)

| Peptide | Target | Cell Line | IC50/EC50 | Paper |
|---------|--------|-----------|-----------|-------|
| SFTI-G5 | HER2/EGFR | Calu-3 (NSCLC) | 0.073 uM | Singh 2025 |
| MGS4_V10 (tetramer) | Unknown (NSCLC) | H1299 | EC50 1.5-3.5 nM | Allred 2023 |
| MGS4_V8-saporin | Unknown (NSCLC) | H1299 | IC50 9.4 nM | Allred 2023 |
| McGuire tetramers | Unknown (NSCLC) | Multiple | KD 0.0071-40 nM | McGuire 2014 |
| BT8009 | Nectin-4 | Multiple | KD 2.8 nM (SPR) | Mudd 2022 |
| HSP4-liposome | Multi-subtype lung | NCI-H446 | 9-13x IC50 reduction | Chi 2017 |
| AC-P19M | Multi-target | A549/H460 | ~10-15 uM | Shin 2022 |
| K4F6K4 | Membrane | A549 | 62.6 ug/mL | Yang 2022 |

### Best In Vivo Results

| Peptide/Conjugate | Model | Outcome | Paper |
|-------------------|-------|---------|-------|
| HSP4-PLD (liposomal dox) | Orthotopic lung xenograft | +47 days median survival (131 vs 84 d) | Chi 2017 |
| K4F6K4 | A549 xenograft | -81.6% tumor volume at Day 28 | Yang 2022 |
| MGS4_V8-saporin | H2009 xenograft | ~50% tumor size reduction, p<0.01 | Allred 2023 |
| BT8009-MMAE | MDA-MB-468 xenograft | Near-complete regression by Day 18 | Mudd 2022 |
| SFTI-G5 | Calu-3 xenograft | Significant growth delay, p<0.001 | Singh 2025 |
| NKTP-3 | A427 xenograft + primary model | Strong antitumor activity, no toxicity | Zhou 2022 |

### Selectivity Index (Cancer vs. Normal Cells)

| Peptide | Selectivity | Normal Cell Control | Paper |
|---------|-------------|---------------------|-------|
| SFTI-G5 | >500-fold | HEK-293, MCF-10A | Singh 2025 |
| AC-P19M | No IC50 at 100 uM in normal | BEAS-2B, hADMSCs | Shin 2022 |
| K4F6K4 | 12.9x | MRC-5 lung fibroblasts | Yang 2022 |
| LCP1 | 5.1x | Normal lung WI-38 | Bakhshinejad 2018 |
| MGS4_V8 | Minimal uptake in HBEC | Normal bronchial epithelial | Allred 2023 |

---

## 7. Clinical Translation Pipeline

### Development Stage Mapping

```
DISCOVERY          IN VITRO           IN VIVO            CLINICAL
   |                  |                  |                  |
   |  Bakhshinejad    |  Chi 2017        |  BT8009          |
   |  2018 (LCP1)     |  McGuire 2014    |  (Phase I/II)    |
   |                  |  Furman 2022     |                  |
   |  Shin 2022       |  Zhou 2022       |  LUNA18           |
   |  (AC-P19M)       |  Yang 2022       |  (Phase I/II)    |
   |                  |  Allred 2023     |                  |
   |                  |  Singh 2025      |  p28              |
   |                  |                  |  (Phase I)        |
   |                  |                  |                  |
   AI Models          NP Systems         T-DXd (approved    |
   (Wu 2025)          (Kim 2024,         for HER2+ NSCLC)  |
   68 models          Lee 2025)          (ADC, not peptide) |
```

### Bottlenecks to Clinical Translation

Synthesized from limitations across all 19 papers:

1. **Unknown receptors**: Several high-affinity peptides (McGuire, Chi, Allred) bind unidentified targets, complicating regulatory pathways
2. **Xenograft limitations**: Most in vivo studies use subcutaneous models rather than orthotopic lung tumors (exception: Chi 2017)
3. **Pharmacokinetics**: Only BT8009 and SFTI-G5 report detailed PK data; most peptides lack ADME characterization
4. **Manufacturing scale-up**: Cyclotide/SFTI synthesis requires native chemical ligation; D-peptide synthesis is expensive
5. **Validation gap**: Of 68 AI models surveyed (Wu 2025), most lack wet-lab validation

---

## 8. Lung Cancer-Specific Insights

### Coverage by NSCLC Driver Mutation

| Driver | Peptide Approach | Paper(s) | Status |
|--------|------------------|----------|--------|
| EGFR (WT/mutant) | GE11, P6, SFTI-G5, erlotinib-resistance strategies | Furman 2022, Singh 2025, Karankar 2025 | Pre-clinical |
| EGFR T790M/C797S | Peptides bypassing TKI resistance | Karankar 2025, Karati 2025 | Conceptual |
| KRAS G12D | NKTP-3 (direct binding), LUNA18 | Zhou 2022, Nhan 2023 | LUNA18 Phase I/II |
| KRAS G12C | Not directly targeted by surveyed peptides | — | Gap |
| HER2 | SFTI-G5 (dimerization inhibitor), T-DXd (ADC) | Singh 2025, Lee 2025 | T-DXd approved |
| ALK fusions | Mentioned in reviews, no specific peptide | Karankar 2025 | Gap |
| ROS1 fusions | Mentioned in reviews, no specific peptide | Karankar 2025 | Gap |
| MET amplification | Mentioned in reviews, no specific peptide | Karankar 2025 | Gap |
| PD-L1 (immunotherapy) | Cyclotide grafts proposed | Chowdhury 2025 | Early research |

### SCLC vs. NSCLC Coverage

Only Chi et al. (2017) addresses SCLC directly, with HSP peptides binding both SCLC and NSCLC subtypes. All other papers focus exclusively on NSCLC. This represents a significant gap given SCLC's aggressive biology and lack of targeted therapies.

### Chemoresistance

Karati et al. (2025) provides the most focused treatment of peptide strategies against lung cancer chemoresistance, identifying mechanisms by which ACPs bypass P-glycoprotein efflux through direct membrane disruption — a mode of action fundamentally different from conventional drugs.

---

## 9. Cross-Reference Network

Several papers in this survey are directly connected through shared authors, building-block peptides, or conceptual lineage:

### Direct Research Lineage
- **McGuire 2014 → Allred 2023**: Same group (SRI International), same phage display-derived peptide family. McGuire identified the initial MGS4 peptide; Allred optimized it (MGS4_V8) and demonstrated saporin delivery.
- **Singh 2025 ↔ Chowdhury 2025**: Both from Jois group (LSU). Singh presents SFTI-G5 experimental data; Chowdhury reviews the molecular chimera framework that underpins SFTI grafting strategy.

### Conceptual Connections
- **Shin 2022 → Wu 2025**: Shin used early AI tools (mACPpred, ACPred) for peptide design; Wu reviews the entire AI-ACP landscape including these tools.
- **Furman 2022 + Zhou 2022 → Karankar 2025**: Both present EGFR/KRAS-targeting cyclic peptides; Karankar reviews the full mutation-targeted peptide landscape.
- **Chi 2017 + Allred 2023 → Lee 2025**: Peptide-targeted liposomal delivery (Chi) and peptide-toxin conjugates (Allred) are both reviewed in Lee's nanocarrier landscape paper.
- **Yang 2022 + Shin 2022 → Bauso 2024**: Both present ACPs with lung cancer activity; Bauso catalogs them in a broader review.
- **Mudd 2022 → Alamdari 2023**: BT8009 bicycle toxin conjugate is a key example in Alamdari's PDC review.

---

## 10. Key Gaps and Future Directions

Synthesized from limitations across all 19 papers:

### Unresolved Challenges

| Gap | Description | Relevant Papers |
|-----|-------------|-----------------|
| **KRAS G12C peptides** | Most common KRAS mutation in NSCLC smokers; no peptide therapeutic in survey | Zhou 2022 (addresses G12D only) |
| **SCLC targeting** | Only 1/19 papers (Chi 2017) addresses SCLC; aggressive subtype with poor outcomes | All reviews note this gap |
| **ALK/ROS1/MET peptides** | Mentioned in reviews but no experimental peptides exist | Karankar 2025 |
| **Orthotopic models** | Most in vivo studies use subcutaneous xenografts, not lung orthotopic tumors | Only Chi 2017 uses orthotopic |
| **AI validation** | 68 AI models exist but most lack wet-lab validation | Wu 2025 |
| **Head-to-head comparisons** | No paper compares peptides against standard-of-care antibodies or TKIs | All papers |
| **Combination therapy** | Few studies explore peptides combined with immunotherapy or chemotherapy | Karati 2025 (conceptual) |
| **Biomarker stratification** | Peptides binding unknown receptors cannot be matched to patient populations | McGuire 2014, Chi 2017, Allred 2023 |

### Emerging Opportunities

1. **Oral peptide therapeutics**: SFTI-G5 (Singh 2025) demonstrates oral bioavailability for an anticancer peptide — a potential paradigm shift if the approach generalizes to other targets.

2. **AI-to-clinic pipeline**: Wu (2025) proposes a framework, but no AI-discovered ACP has reached clinical trials. The first to achieve this will validate the entire computational ACP field.

3. **Peptide-immunotherapy combinations**: PD-L1-targeting grafted cyclotides (Chowdhury 2025) could combine with existing checkpoint inhibitors for synergistic effects.

4. **Inhalable peptide delivery**: Lee (2025) highlights pulmonary delivery routes that could concentrate peptides directly in lung tumors, bypassing systemic distribution.

5. **Multi-target peptides**: NKTP-3 (Zhou 2022) demonstrates dual-targeting (NRP1 + KRASG12D) is feasible; extending this to other target pairs could address resistance mechanisms.

---

## 11. Summary Table: All 19 Papers at a Glance

| # | Paper | Year | Type | Key Peptide(s) | Target(s) | Stage | Best Efficacy |
|---|-------|------|------|----------------|-----------|-------|---------------|
| 1 | Chi et al. | 2017 | Research | HSP1/2/4 | Multi-subtype lung | In vivo | +47 d survival |
| 2 | Karankar et al. | 2025 | Review | GE11, p28, NKTP-3 | EGFR/TP53/KRAS/ALK | Review | — |
| 3 | Karati et al. | 2025 | Review | ACPs (various) | Chemoresistance | Review | — |
| 4 | Nhan et al. | 2023 | Review | 56 pre-clinical + 10 clinical | Multiple | Review | — |
| 5 | McGuire et al. | 2014 | Research | 11 NSCLC peptides | NSCLC surface | In vivo | KD 0.007 nM |
| 6 | Bakhshinejad et al. | 2018 | Research | LCP1 (AWRTHTP) | A549 surface | In vitro | 5.1x selectivity |
| 7 | Furman et al. | 2022 | Research | P6, P9 (cyclic) | EGFR/EGFRvIII | In vitro | IC50 2.2 uM (PDC) |
| 8 | Zhou et al. | 2022 | Research | NKTP-3 | NRP1 + KRASG12D | In vivo | Dual-target, no toxicity |
| 9 | Shin et al. | 2022 | Research | AC-P19M | Multi-target | In vitro | >6.7x selectivity |
| 10 | Yang et al. | 2022 | Research | K4F6K4 | Membrane | In vivo | -81.6% tumor vol |
| 11 | Bauso et al. | 2024 | Review | 7 lung ACPs cataloged | Multiple | Review | — |
| 12 | Mudd et al. | 2022 | Research | BT8009 (BTC) | Nectin-4 | **Phase I/II** | Near-complete regression |
| 13 | Singh et al. | 2025 | Research | SFTI-G5 | HER2/EGFR | In vivo | IC50 73 nM, oral |
| 14 | Alamdari et al. | 2023 | Review | DTX-P7, ANG1005 | PDC landscape | Review | — |
| 15 | Kim et al. | 2024 | Review | CPP33-ZIF-90 | NP platforms | Review | — |
| 16 | Lee et al. | 2025 | Review | T-DXd, inhalables | Nanocarriers | Review | — |
| 17 | Allred et al. | 2023 | Research | MGS4_V8 + saporin | NSCLC surface | In vivo | IC50 9.4 nM, -50% tumor |
| 18 | Wu et al. | 2025 | Review | 68 AI models | Computational | Review | — |
| 19 | Chowdhury et al. | 2025 | Review | Cyclotide/SFTI chimeras | EGFR/HER2/PD-L1 | Review | — |

---

## 12. Concluding Observations

This survey of 19 papers spanning 2014-2025 reveals a field undergoing rapid maturation:

1. **From discovery to design**: The dominant paradigm has shifted from empirical phage display screening to rational computational and AI-driven design, enabling access to intracellular targets and predictable binding properties.

2. **From injection to ingestion**: The development of orally bioavailable scaffolded peptides (SFTI-G5) represents a potential inflection point, as oral delivery could dramatically improve patient compliance and reduce treatment costs.

3. **From general to specific**: While early peptides bound unknown receptors on cancer cells, current approaches target validated oncogenes (KRAS, EGFR, HER2) with known roles in lung cancer progression, enabling rational patient stratification.

4. **From single to dual targeting**: NKTP-3's dual-targeting of surface (NRP1) and intracellular (KRASG12D) proteins exemplifies a trend toward multi-target peptides that may resist the single-target resistance mechanisms plaguing TKIs.

5. **The validation gap persists**: Despite 68 AI models and dozens of candidate peptides, only BT8009 has reached clinical trials as a peptide-based therapeutic for lung cancer-relevant indications. Closing the gap between computational prediction and clinical reality remains the field's central challenge.

The convergence of AI-driven design, scaffold engineering for oral delivery, and nanocarrier-mediated lung-specific delivery creates a promising landscape for the next generation of peptide-based lung cancer therapeutics.
