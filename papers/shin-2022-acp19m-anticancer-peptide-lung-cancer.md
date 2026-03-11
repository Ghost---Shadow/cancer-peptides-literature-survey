# De Novo Design of AC-P19M, a Novel Anticancer Peptide with Apoptotic Effects on Lung Cancer Cells and Anti-Angiogenic Activity

## Paper Metadata

| Field | Details |
|-------|---------|
| **Authors** | Min Kyoung Shin, Bo-Young Jang, Kyung-Bin Bu, Seung-Ho Lee, Dong-Hee Han, Jin Wook Oh, Jung-Suk Sung |
| **Affiliation** | Department of Life Science, Dongguk University-Seoul, South Korea |
| **Journal** | International Journal of Molecular Sciences |
| **Year** | 2022 (published Dec 9) |
| **Volume/Issue** | 23(24): 15594 |
| **DOI** | [10.3390/ijms232415594](https://doi.org/10.3390/ijms232415594) |
| **PMC** | [PMC9779372](https://pmc.ncbi.nlm.nih.gov/articles/PMC9779372/) |
| **PMID** | 36555235 |
| **Type** | Original Research |

## Summary

This study used computational de novo design to create AC-P19M, a novel anticancer peptide with multi-target activity against lung cancer cells. AC-P19M kills A549 and H460 lung cancer cells through membrane disruption and apoptosis induction while showing negligible toxicity to normal bronchial epithelial cells. It additionally inhibits cancer cell migration/invasion (anti-EMT) and suppresses VEGF-induced angiogenesis.

## Design Strategy

1. **Database mining**: Extracted 15-20 aa anticancer sequences from CancerPPD
2. **Template generation**: WebLogo alignment to identify conserved positions
3. **Charge optimization**: Substituted C-terminal residues with Arg (R) and Lys (K) → net charge increased from +7 (AC-P19) to **+9** (AC-P19M)
4. **AI prediction**: Validated using mACPpred, ACPred, ENNACT tools
5. **Result**: Enhanced amphipathicity and cationic charge for improved cancer cell membrane interaction

## Mechanisms of Action

### 1. Membrane Disruption
- Direct LDH release comparable to Triton X-100 positive control
- Exploits exposed phosphatidylserine on cancer cell outer membrane leaflet

### 2. Apoptosis Induction
- Bax upregulation (~2.5-fold)
- Bcl-2 suppression
- Caspase 3 activation (>2-fold)
- Concentration-dependent increase in Annexin V+/PI+ populations

### 3. Anti-EMT / Anti-Migration
- E-cadherin upregulation (epithelial marker)
- N-cadherin and Vimentin downregulation (mesenchymal markers)
- Inhibited transwell migration and invasion (>20% reduction)

### 4. Anti-Angiogenesis
- Suppressed VEGFR2 phosphorylation (near-complete inhibition)
- Attenuated downstream Akt and ERK signaling
- Inhibited HUVEC tube formation on Matrigel

## Key Results

### Cytotoxicity & Selectivity

| Cell Line | Type | Sensitivity |
|-----------|------|-------------|
| A549 | Lung adenocarcinoma | IC50 ~10-15 µM |
| H460 | Lung large cell carcinoma | IC50 similar range |
| BEAS-2B | Normal bronchial epithelial | No IC50 at 100 µM |
| hADMSCs | Normal mesenchymal stem cells | No IC50 at 100 µM |
| HUVECs | Endothelial | >70% viability at 100 µM |

- Hemolysis: <15% across all tested concentrations
- **Cancer-selective** — at least 5-fold more toxic to cancer cells vs. normal cells

## Significance

- Demonstrates AI-assisted de novo peptide design as a viable discovery approach
- Multi-target ACP addressing four hallmarks of cancer simultaneously: proliferation, apoptosis evasion, invasion/metastasis, angiogenesis
- Selective for cancer cells over normal lung epithelium — favorable therapeutic window
- Provides a template for charge-optimized amphipathic anticancer peptide design

## Limitations

- **No in vivo studies** — entirely in vitro
- Exact peptide sequence not explicitly reported in accessible text
- IC50 values approximate; precise quantification not extracted
- Stability and pharmacokinetics not assessed
- Single cancer type (lung) tested

## Tags

`anticancer peptide` `de novo design` `lung cancer` `A549` `H460` `apoptosis` `membrane disruption` `anti-angiogenesis` `EMT` `VEGFR2` `computational design` `original research`
