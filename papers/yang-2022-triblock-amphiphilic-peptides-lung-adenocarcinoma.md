# Therapeutic Effects of Synthetic Triblock Amphiphilic Short Antimicrobial Peptides on Human Lung Adenocarcinoma

## Paper Metadata

| Field | Details |
|-------|---------|
| **Authors** | Danjing Yang, Liang Zhu, Xiangyu Lin, Jiaming Zhu, Yusheng Qian, Wenhui Liu, Jianjun Chen, Chuncai Zhou, Jing He |
| **Affiliation** | Tongji University, Shanghai, China |
| **Journal** | Pharmaceutics |
| **Year** | 2022 |
| **Volume/Issue** | 14(5): 929 |
| **DOI** | [10.3390/pharmaceutics14050929](https://doi.org/10.3390/pharmaceutics14050929) |
| **PMC** | [PMC9143638](https://pmc.ncbi.nlm.nih.gov/articles/PMC9143638/) |
| **PMID** | 35631515 |
| **Type** | Original Research |

## Summary

This study evaluated a series of synthetic triblock amphiphilic antimicrobial peptides (KnFmKn) for anticancer activity against lung adenocarcinoma. The lead compound K4F6K4 showed the most potent tumoricidal activity with ~13-fold selectivity for A549 cancer cells over normal lung fibroblasts. In xenograft mice, K4F6K4 reduced tumor volume by 81.6% with no adverse effects. Membrane disruption was confirmed as the primary mechanism.

## Design Rationale — Triblock Architecture

Peptides use a spatially segregated **Lys-Phe-Lys** triblock design:

```
[Cationic Block] — [Hydrophobic Block] — [Cationic Block]
    Kn                    Fm                    Kn
```

- N-terminus: Lysine (K) residues — electrostatic attraction to anionic cancer membranes
- Center: Phenylalanine (F) residues — hydrophobic insertion into lipid bilayer
- C-terminus: Lysine (K) residues — additional charge and membrane anchoring

## Peptide Panel

| Peptide | Sequence | Net Charge | Hydrophobic % | MW (Da) |
|---------|----------|------------|---------------|---------|
| K2F6K2 | KK-FFFFFF-KK | +4 | 60% | 1431.9 |
| K3F6K3 | KKK-FFFFFF-KKK | +6 | 50% | 1688.3 |
| **K4F6K4** | **KKKK-FFFFFF-KKKK** | **+8** | **43%** | **1944.7** |
| K4F8K4 | KKKK-FFFFFFFF-KKKK | +8 | 50% | 2239.0 |

## Key Results

### In Vitro Cytotoxicity (IC50, 48h)

| Peptide | A549 (µg/mL) | HLF Normal (µg/mL) | Selectivity |
|---------|-------------|-------|-------------|
| K2F6K2 | 1146 | 759 | 0.66x (non-selective) |
| K3F6K3 | 123 | 759 | 6.2x |
| **K4F6K4** | **62.6** | **809** | **12.9x** |
| K4F8K4 | 572 | 704 | 1.2x |

### In Vivo Xenograft Results (A549 in BALB/c nude mice)

| Parameter | PBS Control | K4F6K4 (10 mg/kg) | Change |
|-----------|-------------|---------------------|--------|
| Tumor volume (Day 28) | 1275 mm³ | 235 mm³ | **-81.6%** |
| Tumor weight | 0.47 g | 0.16 g | **-66%** |
| Body weight | Normal | Normal | No change |
| Liver histology | Normal | Normal | No toxicity |

### Apoptosis (250 µg/mL)
- A549: 43% apoptosis
- HLF (normal): 9.9% (negligible vs 7.9% baseline)

## Mechanism of Action — Membrane Disruption

Confirmed by multiple methods:
1. **Flow cytometry**: Concentration-dependent apoptosis induction
2. **Optical microscopy**: Cancer cell morphological changes (blebbing, lysis)
3. **Confocal microscopy** (CellMask Deep Red): Membrane integrity loss in A549
4. **SEM**: Direct visualization of membrane pore formation and disruption

Primary mechanism: Cationic K residues bind anionic phosphatidylserine exposed on cancer cell surfaces → hydrophobic F core inserts into membrane → pore formation → cytolysis

## Structure-Activity Relationships

| Property | Optimal for Antimicrobial | Optimal for Anticancer |
|----------|--------------------------|------------------------|
| Positive charge (K residues) | 3 per block (K3F6K3) | **4 per block (K4F6K4)** |
| Hydrophobicity | ~50% | **~43%** |

Key insight: Anticancer activity requires **more charge and less hydrophobicity** than antimicrobial activity.

## Significance

- Demonstrates AMP-to-anticancer repurposing with rational structure-activity optimization
- K4F6K4 achieves exceptional selectivity (~13x) through simple amino acid composition tuning
- Strong in vivo efficacy (81.6% tumor reduction) with no observed toxicity
- Simple sequence design (only K and F) enables low-cost synthesis
- Provides design principles: more charge, less hydrophobicity for cancer vs. bacteria

## Limitations

- Single cell line tested (A549 only) — no validation across NSCLC subtypes
- Intraperitoneal dosing — systemic delivery and pharmacokinetics not optimized
- Short study duration (28 days) — long-term efficacy and resistance unknown
- Mechanism limited to membrane disruption — no investigation of intracellular targets

## Tags

`antimicrobial peptide` `anticancer` `lung adenocarcinoma` `A549` `membrane disruption` `K4F6K4` `triblock` `amphiphilic` `xenograft` `in vivo` `structure-activity` `original research`
