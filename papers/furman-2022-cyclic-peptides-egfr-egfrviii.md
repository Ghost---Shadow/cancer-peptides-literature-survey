# Novel Cyclic Peptides for Targeting EGFR and EGFRvIII Mutation for Drug Delivery

## Paper Metadata

| Field | Details |
|-------|---------|
| **Authors** | Olga Furman, Alisa Zaporozhets, Dror Tobi, Andrii Bazylevich, Michael A. Firer, Leonid Patsenker, Gary Gellerman, Bat Chen R. Lubin |
| **Affiliation** | Ariel University & Ariel Center for Applied Cancer Research, Israel |
| **Journal** | Pharmaceutics |
| **Year** | 2022 |
| **Volume/Issue** | 14(7): 1505 |
| **DOI** | [10.3390/pharmaceutics14071505](https://doi.org/10.3390/pharmaceutics14071505) |
| **PMC** | [PMC9318536](https://pmc.ncbi.nlm.nih.gov/articles/PMC9318536/) |
| **PMID** | 35890400 |
| **Type** | Original Research |

## Summary

This study identified novel cyclic peptides targeting EGFR and the EGFRvIII mutation using phage display combined with next-generation sequencing (NGS). From 617,503 initial sequences, 11 lead candidates were selected. Two peptides — P6 (specific for NSCLC) and P9 (specific for glioblastoma) — were conjugated to camptothecin (CPT), producing peptide-drug conjugates 2-3x more cytotoxic than free CPT in EGFR-positive cells.

## Methods

- **Phage display + NGS**: Biopanned cyclic 7-mer peptide library (S-S bridged) on EGFR-expressing cells; sequenced via NGS to identify enriched clones
- **Positive selection cells**: H1299 (NSCLC, EGFR WT), H1975 (NSCLC, EGFR L858R/T790M), DKMG (glioblastoma, EGFR WT + EGFRvIII)
- **Negative selection**: K562 (EGFR-negative leukemia)
- **Binding validation**: Flow cytometry, competitive EGF binding, confocal microscopy
- **Computational**: Peptide docking to EGFR extracellular domain (PRODIGY)
- **Drug conjugation**: CPT linked via biodegradable carbamate + GABA linker

## EGFR Expression in Cell Lines

| Cell Line | Cancer Type | EGFR WT | EGFRvIII |
|-----------|-------------|---------|----------|
| H1299 | NSCLC | 65% | — |
| H1975 | NSCLC (L858R/T790M) | 55% | — |
| DKMG | Glioblastoma | 92% | 82% |
| K562 | Leukemia | 0% | — |

## Lead Peptides

| Peptide | Specificity | Docking Energy | Key Feature |
|---------|-------------|----------------|-------------|
| **P6** | NSCLC (H1299) | −13.0 kcal/mol | High EGFR-WT selectivity |
| **P9** | Glioblastoma (DKMG) | −11.9 kcal/mol | Binds both EGFR-WT and EGFRvIII |

- Seven of 11 peptides showed specific binding and internalization into EGFR+ cells
- EGF competitively displaced P3-P6, P9, P11 — confirming binding near EGF site
- Weak binding to EGFR-negative HEK-293 cells confirms selectivity

## Peptide-Drug Conjugate Results

### Cytotoxicity (IC50, µM) — H1299 (NSCLC)

| Compound | 24h | 48h | 72h |
|----------|-----|-----|-----|
| P6-CPT | 14.5 ± 2.2 | 5.5 ± 0.7 | — |
| P9-CPT | 8.4 ± 0.5 | 2.2 ± 0.3 | 1.2 ± 0.1 |
| Free CPT | 54.8 ± 2.0 | — | — |

### Cytotoxicity (IC50, µM) — DKMG (Glioblastoma)

| Compound | 24h | 48h | 72h |
|----------|-----|-----|-----|
| P9-CPT | 6.76 ± 1.4 | 2.7 ± 1.0 | 0.2 ± 0.1 |
| Free CPT | 25 ± 1.3 | — | — |

- PDC IC50 values were **2-3 fold lower** than free CPT
- CPT release half-life: 6-7 hours (biodegradable carbamate linker)
- Conjugation did not interfere with CPT cytotoxic effects

## Significance

- First cyclic peptides targeting both wild-type EGFR and EGFRvIII mutation
- Addresses drug resistance problem in EGFR-targeted therapies (resistance to TKIs and mAbs)
- NGS-guided phage display enables deeper screening (617K sequences vs traditional ~100 clones)
- P6 specifically relevant for NSCLC drug delivery applications
- Demonstrates peptide-drug conjugate (PDC) approach as alternative to antibody-drug conjugates (ADCs)

## Limitations

- No in vivo studies — all data is in vitro
- Full peptide sequences (P1-P11) not disclosed in main text
- Molecular receptor identity on EGFRvIII cells not fully characterized
- Drug conjugate linker half-life (6-7h) may limit systemic delivery applications

## Tags

`EGFR` `EGFRvIII` `cyclic peptides` `phage display` `NGS` `NSCLC` `glioblastoma` `camptothecin` `peptide-drug conjugate` `H1299` `H1975` `drug delivery` `original research`
