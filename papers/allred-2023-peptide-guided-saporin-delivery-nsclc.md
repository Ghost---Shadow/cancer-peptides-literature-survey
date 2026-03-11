# Tumor-Specific Intracellular Delivery: Peptide-Guided Transport of a Catalytic Toxin

## Paper Metadata

| Field | Details |
|-------|---------|
| **Authors** | Curtis A. Allred, Claire Gormley, Indu Venugopal, Shunzi Li, Michael J. McGuire, Kathlynn C. Brown |
| **Affiliation** | SRI International, Biosciences Division, Harrisonburg, VA, USA |
| **Journal** | Communications Biology |
| **Year** | 2023 |
| **Volume/Pages** | 6, Article 60 |
| **DOI** | [10.1038/s42003-022-04385-7](https://doi.org/10.1038/s42003-022-04385-7) |
| **PMC** | [PMC9845330](https://pmc.ncbi.nlm.nih.gov/articles/PMC9845330/) |
| **PMID** | [36650239](https://pubmed.ncbi.nlm.nih.gov/36650239/) |
| **Type** | Original Research |

## Summary

This study optimizes a phage display-selected peptide (MGS4) for targeted intracellular delivery of the catalytic toxin saporin to NSCLC cells. Through systematic truncation, N-terminal acetylation, and valency engineering, the authors develop MGS4_V8 (Ac-FHAVPQSFYT), a 10-amino-acid peptide with <40 nM affinity on four NSCLC cell lines, >48 h serum stability, and cancer-specific internalization. The peptide-saporin conjugate achieves single-digit nanomolar cytotoxicity in vitro and significantly slows tumor growth in vivo.

## Background & Motivation

- Lung cancer accounts for ~20% of all cancer deaths; NSCLC represents ~85% of cases
- Antibody-based delivery systems face limitations: large size, poor tissue penetration, immunogenicity, high production costs
- Peptides offer comparable affinity with smaller size, better tissue penetration, lower immunogenicity, and scalable chemical synthesis
- The group previously identified MGS4 via phage display biopanning on live NSCLC cells (HCC15)
- Key need: a cancer-specific ligand capable of delivering protein toxins intracellularly

## Methods

- **Peptide selection**: Phage display biopanning of peptide library fused to pIII coat protein on live HCC15 NSCLC cells
- **Peptide optimization**: Sequential N- and C-terminal truncations to identify minimal binding sequence; N-terminal acetylation for serum stability; multimerization (monomer, dimer, tetramer)
- **Binding assays**: Flow cytometry with streptavidin-fluorophore conjugates; EC50 by nonlinear regression
- **Serum stability**: 48 h incubation in human serum at 37 °C, analyzed by HPLC/MS
- **Internalization**: Confocal microscopy with GFP-labeled organelle markers (lysosome, Golgi, ER, plasma membrane)
- **Colocalization**: Mander's coefficient quantification (0 = no colocalization, 1 = complete)
- **Cytotoxicity**: Biotinylated peptide conjugated to streptavidin-saporin (1:1); CellTiter-Glo viability assay after 6 h exposure + 72 h incubation
- **In vivo imaging**: Near-infrared fluorescence (Alexa Fluor 750) via IVIS; ex vivo with LI-COR Odyssey
- **In vivo therapy**: H2009 xenografts in mice; IV dosing of MGS4_V8-saporin (7.5 ug, twice weekly, 2.5 weeks)
- **Statistics**: Two-way ANOVA with Tukey's multiple comparison test

## Key Results

### Peptide Optimization — Truncation and Acetylation

| Variant | Sequence | Modification | EC50 (nM) |
|---------|----------|-------------|-----------|
| MGS4_V2 | FHAVPQSFYTAP | Full-length monomer | 4.4 +/- 0.72 |
| MGS4_V4 | FHAVPQSFYT | C-terminal truncation | Similar to V2 |
| MGS4_V8 | Ac-FHAVPQSFYT | Acetylated + truncated | 20.1 +/- 2.55 |
| MGS4_V6 | Ac-HAVPQSFYT | Missing N-terminal Phe | No binding (control) |

- N-terminal acetylation: complete protection from aminopeptidase degradation (>48 h serum stability vs. full degradation of non-acetylated V4)
- N-terminal phenylalanine (F) is essential for binding activity

### Multi-Cell Line Binding (MGS4_V8 Monomer)

| Cell Line | Cancer Type | EC50 (nM) |
|-----------|-------------|-----------|
| H1299 | Lung adenocarcinoma | 38 |
| H2009 | Lung carcinoma | 38 |
| H358 | Lung adenocarcinoma | 34 |
| H1993 | Lung adenocarcinoma | 37 |
| HBEC | Normal bronchial epithelial | Minimal (<5% background) |

### Valency Effects

| Variant | Valency | EC50 Range (nM) | Molecules/Cell at Saturation |
|---------|---------|-----------------|------------------------------|
| MGS4_V8 | Monomer | 20-38 | 40,000-119,000 |
| MGS4_V9 | Dimer | 5.8-6.8 | Similar |
| MGS4_V10 | Tetramer | 1.5-3.5 | Similar |

- Valency increases affinity but does not increase total cellular uptake at saturation

### Intracellular Trafficking

- Rapid internalization: 40,000-119,000 peptide molecules per cell in 1 hour
- Lysosomal colocalization: ~70% by 1 h, >70% sustained through 24 h (Mander's coefficient)
- Saporin partially escapes lysosomal trafficking (lower Mander's coefficient 0.23-0.76 vs Qdots 0.33-0.66), enabling cytoplasmic access to ribosomes

### Saporin Conjugate Cytotoxicity (In Vitro)

| Conjugate | Cell Line | IC50 (nM) |
|-----------|-----------|-----------|
| MGS4_V8-saporin | H1299 | 9.4 |
| MGS4_V8-saporin | H2009 | 23 |
| MGS4_V9-saporin | H1299 | 7.2 |
| MGS4_V9-saporin | H2009 | 40 |
| MGS4_V8 alone | All lines | No toxicity up to 200 nM |
| MGS4_V6-saporin (control) | All lines | No toxicity up to 200 nM |

### In Vivo Results

- **Tumor homing**: 25-40-fold increased tumor accumulation vs. control peptide (MGS4_V6)
- **Retention**: 85% signal at 24 h, sustained through 72 h
- **Ex vivo**: 240-fold higher fluorescence in MGS4_V8-treated tumors
- **Therapeutic efficacy** (H2009 xenografts, n = 8-9/group):
  - Control tumors grew 3-fold over 10 days
  - MGS4_V8-saporin treated tumors remained static
  - By day 18: treated tumors ~50% smaller than controls (p < 0.01 at days 12, 18)

## Significance

- Demonstrates a complete pipeline from peptide selection to in vivo therapeutic efficacy for NSCLC-targeted protein toxin delivery
- MGS4_V8 is one of few peptides shown to deliver a catalytic toxin (saporin) specifically to lung cancer cells in vivo
- Saporin acts catalytically (one molecule can inactivate multiple ribosomes), offering potency advantages over stoichiometric drugs
- N-terminal acetylation as a simple strategy to achieve >48 h serum stability without compromising binding
- Connects to clinical context: two Phase I/II trials of immunotoxin-saporin conjugates (anti-CD22, anti-CD25) have been completed for hematological cancers
- Builds on the same group's earlier phage display work (McGuire et al. 2014) with a therapeutic application

## Limitations

- Saporin conjugation via biotin-streptavidin linkage is bulky (~60 kDa streptavidin); clinical formulation would require direct chemical conjugation
- Receptor/target on NSCLC cells remains unidentified
- Only one dosing regimen tested in vivo (7.5 ug, twice weekly)
- Xenograft model (subcutaneous H2009) does not reflect orthotopic lung tumor microenvironment
- Limited to four NSCLC cell lines; previous work showed binding to ~54% of NSCLC lines and 24% of lung biopsies
- No pharmacokinetics, biodistribution to off-target organs, or toxicology data reported
- No comparison with antibody-saporin conjugates or free chemotherapy

## Tags

`lung cancer` `NSCLC` `targeting peptide` `saporin` `ribosome-inactivating protein` `immunotoxin` `phage display` `peptide optimization` `N-terminal acetylation` `intracellular delivery` `lysosomal trafficking` `in vivo` `xenograft` `MGS4` `protein toxin delivery`
