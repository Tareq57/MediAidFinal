import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { PiClockCountdownFill } from "react-icons/pi";
import { TbCalendarStats } from "react-icons/tb";
import { TbDeviceWatchStats2 } from "react-icons/tb";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { BASE_URL } from "@/config";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { set } from "date-fns";
import AvgStar from "@/assets/images/avgstar.png";
import { Badge } from "@/components/ui/badge";
import CategoryIcon from "@/assets/images/category.svg";
import ShopIcon from "@/assets/images/shop.svg";

const medicines = [
  {
    _id: "65c4cdaab99af264ac497f56",
    photo:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20231023-WA0137.jpg&w=750&q=75",
    name: "Napa 500 mg",
    type: "Tablet",
    category: "Paracetamol",
    manufacturer: "Beximco Pharmaceuticals Ltd.",
    overview:
      "Indications of Napa 500 mg\n\nNapa 500 mg is indicated for fever, common cold and influenza, headache, toothache, earache, bodyache, myalgia, neuralgia, dysmenorrhoea, sprains, colic pain, back pain, post-operative pain, postpartum pain, inflammatory pain and post vaccination pain in children. It is also indicated for rheumatic & osteoarthritic pain and stiffness of joints.\nTheropeutic Class\n\nNon opioid analgesics\nPharmacology\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nDosage & Administration of Napa 500 mg\nTablet:\n\n    Adult: 1-2 tablets every 4 to 6 hours up to a maximum of 4 gm (8 tablets) daily.\n    Children (6-12 years): ½ to 1 tablet 3 to 4 times daily. For long term treatment it is wise not to exceed the dose beyond 2.6 gm/day.\n\nExtended Release Tablet:\n\n    Adults & Children over 12 years: Two tablets, swallowed whole, every 6 to 8 hours (maximum of 6 tablets in any 24 hours).The tablet must not be crushed.\n\nSyrup/Suspension:\n\n    Children under 3 months: 10 mg/kg body weight (reduce to 5 mg/kg if jaundiced) 3 to 4 times daily.\n    3 months to below 1 year: ½ to 1 teaspoonful 3 to 4 times daily.\n    1-5 years: 1 -2 teaspoonful 3 to 4 times daily.\n    6-12 years: 2-A teaspoonful 3 to 4 times daily.\n    Adults: 4-8 teaspoonful 3 to 4 times daily.\n\nSuppository:\n\n    Children 3-12 months: 60-120 mg,4 times daily.\n    Children 1-5 years: 125-250 mg 4 times daily.\n    Children 6-12 years: 250-500 mg 4 times daily.\n    Adults & children over 12 years: 0.5-1 gm 4 times daily.\n\nPaediatric Drop:\n\n    Children Upto 3 months: 0.5 ml (40 mg)\n    4 to 11 months: 1.0 ml (80 mg)\n    7 to 2 years: 1.5 ml (120 mg). Do not exceed more than 5 dose daily for a maximum of 5 days.\n\nNapa 500 mg tablet with actizorb technology: It dissolves up to five times faster than standard Napa 500 mg tablets. It is a fast acting and safe analgesic with marked antipyretic property. It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics.\n\n    Adults and children (aged 12 years and over): Take 1 to 2 Tablets every four to six hours as needed. Do not take more than 8 caplets in 24 hours.\n    Children (7 to 11 years): Take ½-1 Tablet every four to six hours as needed. Do not take more than 4 caplets in 24 hours. Not recommended in children under 7 years.\n\nInteraction of Napa 500 mg\n\nPatients who have taken barbiturates, tricyclic antidepressants and alcohol may show diminished ability to metabolise large doses of Napa 500 mg. Alcohol can increase the hepatotoxicity of Napa 500 mg overdosage. Chronic ingestion of anticonvulsants or oral steroid contraceptives induce liver enzymes and may prevent attainment of therapeutic Napa 500 mg levels by increasing first-pass metabolism or clearance.\nContraindications\n\nIt is contraindicated in known hypersensitivity to Napa 500 mg.\nSide Effects of Napa 500 mg\n\nSide effects of Napa 500 mg are usually mild, though haematological reactions including thrombocytopenia, leucopenia, pancytopenia, neutropenia, and agranulocytosis have been reported. Pancreatitis, skin rashes, and other allergic reactions occur occasionally.\nPregnancy & Lactation\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed\nPrecautions & Warnings\n\nNapa 500 mg should be given with caution to patients with impaired kidney or liver function. Napa 500 mg should be given with care to patients taking other drugs that affect the liver.\nOverdose Effects of Napa 500 mg\n\nSymptoms of Napa 500 mg overdose in the first 24 hours are pallor, nausea, vomiting, anorexia and abdominal pain. Liver damage may become apparent 12-48 hours after ingestion. Abnormalities of glucose metabolism and metabolic acidosis may occur.\nStorage Conditions\n\nKeep in a dry place away from light and heat. Keep out of the reach of children.\nDrug Classes\n\nNon opioid analgesics\nMode Of Action\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nPregnancy\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed.  Napa 500 mg is excreted in breast milk. Maternal ingestion of Napa 500 mg in normal therapeutic doses does not appear to present a risk to the nursing infant.",
    __v: 0,
  },
  {
    _id: "65c4cdaab99af264ac497f56",
    photo:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20231023-WA0137.jpg&w=750&q=75",
    name: "Napa 500 mg",
    type: "Tablet",
    category: "Paracetamol",
    manufacturer: "Beximco Pharmaceuticals Ltd.",
    overview:
      "Indications of Napa 500 mg\n\nNapa 500 mg is indicated for fever, common cold and influenza, headache, toothache, earache, bodyache, myalgia, neuralgia, dysmenorrhoea, sprains, colic pain, back pain, post-operative pain, postpartum pain, inflammatory pain and post vaccination pain in children. It is also indicated for rheumatic & osteoarthritic pain and stiffness of joints.\nTheropeutic Class\n\nNon opioid analgesics\nPharmacology\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nDosage & Administration of Napa 500 mg\nTablet:\n\n    Adult: 1-2 tablets every 4 to 6 hours up to a maximum of 4 gm (8 tablets) daily.\n    Children (6-12 years): ½ to 1 tablet 3 to 4 times daily. For long term treatment it is wise not to exceed the dose beyond 2.6 gm/day.\n\nExtended Release Tablet:\n\n    Adults & Children over 12 years: Two tablets, swallowed whole, every 6 to 8 hours (maximum of 6 tablets in any 24 hours).The tablet must not be crushed.\n\nSyrup/Suspension:\n\n    Children under 3 months: 10 mg/kg body weight (reduce to 5 mg/kg if jaundiced) 3 to 4 times daily.\n    3 months to below 1 year: ½ to 1 teaspoonful 3 to 4 times daily.\n    1-5 years: 1 -2 teaspoonful 3 to 4 times daily.\n    6-12 years: 2-A teaspoonful 3 to 4 times daily.\n    Adults: 4-8 teaspoonful 3 to 4 times daily.\n\nSuppository:\n\n    Children 3-12 months: 60-120 mg,4 times daily.\n    Children 1-5 years: 125-250 mg 4 times daily.\n    Children 6-12 years: 250-500 mg 4 times daily.\n    Adults & children over 12 years: 0.5-1 gm 4 times daily.\n\nPaediatric Drop:\n\n    Children Upto 3 months: 0.5 ml (40 mg)\n    4 to 11 months: 1.0 ml (80 mg)\n    7 to 2 years: 1.5 ml (120 mg). Do not exceed more than 5 dose daily for a maximum of 5 days.\n\nNapa 500 mg tablet with actizorb technology: It dissolves up to five times faster than standard Napa 500 mg tablets. It is a fast acting and safe analgesic with marked antipyretic property. It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics.\n\n    Adults and children (aged 12 years and over): Take 1 to 2 Tablets every four to six hours as needed. Do not take more than 8 caplets in 24 hours.\n    Children (7 to 11 years): Take ½-1 Tablet every four to six hours as needed. Do not take more than 4 caplets in 24 hours. Not recommended in children under 7 years.\n\nInteraction of Napa 500 mg\n\nPatients who have taken barbiturates, tricyclic antidepressants and alcohol may show diminished ability to metabolise large doses of Napa 500 mg. Alcohol can increase the hepatotoxicity of Napa 500 mg overdosage. Chronic ingestion of anticonvulsants or oral steroid contraceptives induce liver enzymes and may prevent attainment of therapeutic Napa 500 mg levels by increasing first-pass metabolism or clearance.\nContraindications\n\nIt is contraindicated in known hypersensitivity to Napa 500 mg.\nSide Effects of Napa 500 mg\n\nSide effects of Napa 500 mg are usually mild, though haematological reactions including thrombocytopenia, leucopenia, pancytopenia, neutropenia, and agranulocytosis have been reported. Pancreatitis, skin rashes, and other allergic reactions occur occasionally.\nPregnancy & Lactation\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed\nPrecautions & Warnings\n\nNapa 500 mg should be given with caution to patients with impaired kidney or liver function. Napa 500 mg should be given with care to patients taking other drugs that affect the liver.\nOverdose Effects of Napa 500 mg\n\nSymptoms of Napa 500 mg overdose in the first 24 hours are pallor, nausea, vomiting, anorexia and abdominal pain. Liver damage may become apparent 12-48 hours after ingestion. Abnormalities of glucose metabolism and metabolic acidosis may occur.\nStorage Conditions\n\nKeep in a dry place away from light and heat. Keep out of the reach of children.\nDrug Classes\n\nNon opioid analgesics\nMode Of Action\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nPregnancy\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed.  Napa 500 mg is excreted in breast milk. Maternal ingestion of Napa 500 mg in normal therapeutic doses does not appear to present a risk to the nursing infant.",
    __v: 0,
  },
  {
    _id: "65c4cdaab99af264ac497f56",
    photo:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20231023-WA0137.jpg&w=750&q=75",
    name: "Napa 500 mg",
    type: "Tablet",
    category: "Paracetamol",
    manufacturer: "Beximco Pharmaceuticals Ltd.",
    overview:
      "Indications of Napa 500 mg\n\nNapa 500 mg is indicated for fever, common cold and influenza, headache, toothache, earache, bodyache, myalgia, neuralgia, dysmenorrhoea, sprains, colic pain, back pain, post-operative pain, postpartum pain, inflammatory pain and post vaccination pain in children. It is also indicated for rheumatic & osteoarthritic pain and stiffness of joints.\nTheropeutic Class\n\nNon opioid analgesics\nPharmacology\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nDosage & Administration of Napa 500 mg\nTablet:\n\n    Adult: 1-2 tablets every 4 to 6 hours up to a maximum of 4 gm (8 tablets) daily.\n    Children (6-12 years): ½ to 1 tablet 3 to 4 times daily. For long term treatment it is wise not to exceed the dose beyond 2.6 gm/day.\n\nExtended Release Tablet:\n\n    Adults & Children over 12 years: Two tablets, swallowed whole, every 6 to 8 hours (maximum of 6 tablets in any 24 hours).The tablet must not be crushed.\n\nSyrup/Suspension:\n\n    Children under 3 months: 10 mg/kg body weight (reduce to 5 mg/kg if jaundiced) 3 to 4 times daily.\n    3 months to below 1 year: ½ to 1 teaspoonful 3 to 4 times daily.\n    1-5 years: 1 -2 teaspoonful 3 to 4 times daily.\n    6-12 years: 2-A teaspoonful 3 to 4 times daily.\n    Adults: 4-8 teaspoonful 3 to 4 times daily.\n\nSuppository:\n\n    Children 3-12 months: 60-120 mg,4 times daily.\n    Children 1-5 years: 125-250 mg 4 times daily.\n    Children 6-12 years: 250-500 mg 4 times daily.\n    Adults & children over 12 years: 0.5-1 gm 4 times daily.\n\nPaediatric Drop:\n\n    Children Upto 3 months: 0.5 ml (40 mg)\n    4 to 11 months: 1.0 ml (80 mg)\n    7 to 2 years: 1.5 ml (120 mg). Do not exceed more than 5 dose daily for a maximum of 5 days.\n\nNapa 500 mg tablet with actizorb technology: It dissolves up to five times faster than standard Napa 500 mg tablets. It is a fast acting and safe analgesic with marked antipyretic property. It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics.\n\n    Adults and children (aged 12 years and over): Take 1 to 2 Tablets every four to six hours as needed. Do not take more than 8 caplets in 24 hours.\n    Children (7 to 11 years): Take ½-1 Tablet every four to six hours as needed. Do not take more than 4 caplets in 24 hours. Not recommended in children under 7 years.\n\nInteraction of Napa 500 mg\n\nPatients who have taken barbiturates, tricyclic antidepressants and alcohol may show diminished ability to metabolise large doses of Napa 500 mg. Alcohol can increase the hepatotoxicity of Napa 500 mg overdosage. Chronic ingestion of anticonvulsants or oral steroid contraceptives induce liver enzymes and may prevent attainment of therapeutic Napa 500 mg levels by increasing first-pass metabolism or clearance.\nContraindications\n\nIt is contraindicated in known hypersensitivity to Napa 500 mg.\nSide Effects of Napa 500 mg\n\nSide effects of Napa 500 mg are usually mild, though haematological reactions including thrombocytopenia, leucopenia, pancytopenia, neutropenia, and agranulocytosis have been reported. Pancreatitis, skin rashes, and other allergic reactions occur occasionally.\nPregnancy & Lactation\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed\nPrecautions & Warnings\n\nNapa 500 mg should be given with caution to patients with impaired kidney or liver function. Napa 500 mg should be given with care to patients taking other drugs that affect the liver.\nOverdose Effects of Napa 500 mg\n\nSymptoms of Napa 500 mg overdose in the first 24 hours are pallor, nausea, vomiting, anorexia and abdominal pain. Liver damage may become apparent 12-48 hours after ingestion. Abnormalities of glucose metabolism and metabolic acidosis may occur.\nStorage Conditions\n\nKeep in a dry place away from light and heat. Keep out of the reach of children.\nDrug Classes\n\nNon opioid analgesics\nMode Of Action\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nPregnancy\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed.  Napa 500 mg is excreted in breast milk. Maternal ingestion of Napa 500 mg in normal therapeutic doses does not appear to present a risk to the nursing infant.",
    __v: 0,
  },
  {
    _id: "65c4cdaab99af264ac497f56",
    photo:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20231023-WA0137.jpg&w=750&q=75",
    name: "Napa 500 mg",
    type: "Tablet",
    category: "Paracetamol",
    manufacturer: "Beximco Pharmaceuticals Ltd.",
    overview:
      "Indications of Napa 500 mg\n\nNapa 500 mg is indicated for fever, common cold and influenza, headache, toothache, earache, bodyache, myalgia, neuralgia, dysmenorrhoea, sprains, colic pain, back pain, post-operative pain, postpartum pain, inflammatory pain and post vaccination pain in children. It is also indicated for rheumatic & osteoarthritic pain and stiffness of joints.\nTheropeutic Class\n\nNon opioid analgesics\nPharmacology\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nDosage & Administration of Napa 500 mg\nTablet:\n\n    Adult: 1-2 tablets every 4 to 6 hours up to a maximum of 4 gm (8 tablets) daily.\n    Children (6-12 years): ½ to 1 tablet 3 to 4 times daily. For long term treatment it is wise not to exceed the dose beyond 2.6 gm/day.\n\nExtended Release Tablet:\n\n    Adults & Children over 12 years: Two tablets, swallowed whole, every 6 to 8 hours (maximum of 6 tablets in any 24 hours).The tablet must not be crushed.\n\nSyrup/Suspension:\n\n    Children under 3 months: 10 mg/kg body weight (reduce to 5 mg/kg if jaundiced) 3 to 4 times daily.\n    3 months to below 1 year: ½ to 1 teaspoonful 3 to 4 times daily.\n    1-5 years: 1 -2 teaspoonful 3 to 4 times daily.\n    6-12 years: 2-A teaspoonful 3 to 4 times daily.\n    Adults: 4-8 teaspoonful 3 to 4 times daily.\n\nSuppository:\n\n    Children 3-12 months: 60-120 mg,4 times daily.\n    Children 1-5 years: 125-250 mg 4 times daily.\n    Children 6-12 years: 250-500 mg 4 times daily.\n    Adults & children over 12 years: 0.5-1 gm 4 times daily.\n\nPaediatric Drop:\n\n    Children Upto 3 months: 0.5 ml (40 mg)\n    4 to 11 months: 1.0 ml (80 mg)\n    7 to 2 years: 1.5 ml (120 mg). Do not exceed more than 5 dose daily for a maximum of 5 days.\n\nNapa 500 mg tablet with actizorb technology: It dissolves up to five times faster than standard Napa 500 mg tablets. It is a fast acting and safe analgesic with marked antipyretic property. It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics.\n\n    Adults and children (aged 12 years and over): Take 1 to 2 Tablets every four to six hours as needed. Do not take more than 8 caplets in 24 hours.\n    Children (7 to 11 years): Take ½-1 Tablet every four to six hours as needed. Do not take more than 4 caplets in 24 hours. Not recommended in children under 7 years.\n\nInteraction of Napa 500 mg\n\nPatients who have taken barbiturates, tricyclic antidepressants and alcohol may show diminished ability to metabolise large doses of Napa 500 mg. Alcohol can increase the hepatotoxicity of Napa 500 mg overdosage. Chronic ingestion of anticonvulsants or oral steroid contraceptives induce liver enzymes and may prevent attainment of therapeutic Napa 500 mg levels by increasing first-pass metabolism or clearance.\nContraindications\n\nIt is contraindicated in known hypersensitivity to Napa 500 mg.\nSide Effects of Napa 500 mg\n\nSide effects of Napa 500 mg are usually mild, though haematological reactions including thrombocytopenia, leucopenia, pancytopenia, neutropenia, and agranulocytosis have been reported. Pancreatitis, skin rashes, and other allergic reactions occur occasionally.\nPregnancy & Lactation\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed\nPrecautions & Warnings\n\nNapa 500 mg should be given with caution to patients with impaired kidney or liver function. Napa 500 mg should be given with care to patients taking other drugs that affect the liver.\nOverdose Effects of Napa 500 mg\n\nSymptoms of Napa 500 mg overdose in the first 24 hours are pallor, nausea, vomiting, anorexia and abdominal pain. Liver damage may become apparent 12-48 hours after ingestion. Abnormalities of glucose metabolism and metabolic acidosis may occur.\nStorage Conditions\n\nKeep in a dry place away from light and heat. Keep out of the reach of children.\nDrug Classes\n\nNon opioid analgesics\nMode Of Action\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nPregnancy\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed.  Napa 500 mg is excreted in breast milk. Maternal ingestion of Napa 500 mg in normal therapeutic doses does not appear to present a risk to the nursing infant.",
    __v: 0,
  },
  {
    _id: "65c4cdaab99af264ac497f56",
    photo:
      "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20231023-WA0137.jpg&w=750&q=75",
    name: "Napa 500 mg",
    type: "Tablet",
    category: "Paracetamol",
    manufacturer: "Beximco Pharmaceuticals Ltd.",
    overview:
      "Indications of Napa 500 mg\n\nNapa 500 mg is indicated for fever, common cold and influenza, headache, toothache, earache, bodyache, myalgia, neuralgia, dysmenorrhoea, sprains, colic pain, back pain, post-operative pain, postpartum pain, inflammatory pain and post vaccination pain in children. It is also indicated for rheumatic & osteoarthritic pain and stiffness of joints.\nTheropeutic Class\n\nNon opioid analgesics\nPharmacology\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nDosage & Administration of Napa 500 mg\nTablet:\n\n    Adult: 1-2 tablets every 4 to 6 hours up to a maximum of 4 gm (8 tablets) daily.\n    Children (6-12 years): ½ to 1 tablet 3 to 4 times daily. For long term treatment it is wise not to exceed the dose beyond 2.6 gm/day.\n\nExtended Release Tablet:\n\n    Adults & Children over 12 years: Two tablets, swallowed whole, every 6 to 8 hours (maximum of 6 tablets in any 24 hours).The tablet must not be crushed.\n\nSyrup/Suspension:\n\n    Children under 3 months: 10 mg/kg body weight (reduce to 5 mg/kg if jaundiced) 3 to 4 times daily.\n    3 months to below 1 year: ½ to 1 teaspoonful 3 to 4 times daily.\n    1-5 years: 1 -2 teaspoonful 3 to 4 times daily.\n    6-12 years: 2-A teaspoonful 3 to 4 times daily.\n    Adults: 4-8 teaspoonful 3 to 4 times daily.\n\nSuppository:\n\n    Children 3-12 months: 60-120 mg,4 times daily.\n    Children 1-5 years: 125-250 mg 4 times daily.\n    Children 6-12 years: 250-500 mg 4 times daily.\n    Adults & children over 12 years: 0.5-1 gm 4 times daily.\n\nPaediatric Drop:\n\n    Children Upto 3 months: 0.5 ml (40 mg)\n    4 to 11 months: 1.0 ml (80 mg)\n    7 to 2 years: 1.5 ml (120 mg). Do not exceed more than 5 dose daily for a maximum of 5 days.\n\nNapa 500 mg tablet with actizorb technology: It dissolves up to five times faster than standard Napa 500 mg tablets. It is a fast acting and safe analgesic with marked antipyretic property. It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics.\n\n    Adults and children (aged 12 years and over): Take 1 to 2 Tablets every four to six hours as needed. Do not take more than 8 caplets in 24 hours.\n    Children (7 to 11 years): Take ½-1 Tablet every four to six hours as needed. Do not take more than 4 caplets in 24 hours. Not recommended in children under 7 years.\n\nInteraction of Napa 500 mg\n\nPatients who have taken barbiturates, tricyclic antidepressants and alcohol may show diminished ability to metabolise large doses of Napa 500 mg. Alcohol can increase the hepatotoxicity of Napa 500 mg overdosage. Chronic ingestion of anticonvulsants or oral steroid contraceptives induce liver enzymes and may prevent attainment of therapeutic Napa 500 mg levels by increasing first-pass metabolism or clearance.\nContraindications\n\nIt is contraindicated in known hypersensitivity to Napa 500 mg.\nSide Effects of Napa 500 mg\n\nSide effects of Napa 500 mg are usually mild, though haematological reactions including thrombocytopenia, leucopenia, pancytopenia, neutropenia, and agranulocytosis have been reported. Pancreatitis, skin rashes, and other allergic reactions occur occasionally.\nPregnancy & Lactation\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed\nPrecautions & Warnings\n\nNapa 500 mg should be given with caution to patients with impaired kidney or liver function. Napa 500 mg should be given with care to patients taking other drugs that affect the liver.\nOverdose Effects of Napa 500 mg\n\nSymptoms of Napa 500 mg overdose in the first 24 hours are pallor, nausea, vomiting, anorexia and abdominal pain. Liver damage may become apparent 12-48 hours after ingestion. Abnormalities of glucose metabolism and metabolic acidosis may occur.\nStorage Conditions\n\nKeep in a dry place away from light and heat. Keep out of the reach of children.\nDrug Classes\n\nNon opioid analgesics\nMode Of Action\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nPregnancy\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed.  Napa 500 mg is excreted in breast milk. Maternal ingestion of Napa 500 mg in normal therapeutic doses does not appear to present a risk to the nursing infant.",
    __v: 0,
  },
];

const MediShop = () => {
  const { state, setState } = useContext(AuthContext);
  // console.log(state);

  // const [specialization, setSpecialization] = useState([]);

  const [medicines, setMedicines] = useState([]);

  const [search, setSearch] = useState({
    name: "",
    rating: 0,
    feeLower: 0,
    feeUpper: 1000,
    specialization: "all",
    timerange: "all",
  });

  useEffect(() => {
    const fetchDoctors = async () => {
      // let params = {};

      // // Conditionally add parameters to the object
      // if (search.name != "") params.name = search.name;
      // if (search.rating) params.rating = search.rating;
      // if (search.feeLower > -1) params.feeLower = search.feeLower;
      // if (search.feeUpper) params.feeUpper = search.feeUpper;
      // if (search.specialization != "all")
      //   params.specialization = search.specialization;
      // if (search.timerange != "all") params.timerange = search.timerange;

      // const queryString = new URLSearchParams(params).toString();

      // const res1 = await fetch(`${BASE_URL}/medishop/search?${queryString}`, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${state.token}`,
      //   },
      // });

      // console.log(queryString);

      const res2 = await fetch(`${BASE_URL}/medicine/search`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`,
        },
      });

      if (!res1.ok) {
        throw new Error(result1.message);
      }

      const result1 = await res1.json();

      console.log(result1.data);
      setMedicines(result1.data);

      // setDoctors(result1.data);
    };

    if (state.user) {
      fetchDoctors();
    }
  }, [search]);

  // const handleChange = (name, value) => {
  //   if (name == "feeUpper") {
  //     setSearch({ ...search, feeLower: 0 });
  //     setSearch({ ...search, [name]: value[0] });
  //   } else setSearch({ ...search, [name]: value });
  // };
  // console.log(search);

  // console.log(state);

  return (
    <div className="mx-[180px] mt-[40px] flex">
      <div className="w-1/5"></div>
      <div className="flex flex-col w-3/5">
        <div className="flex justify-between">
          <h1 className="font-bold text-3xl text">All Medicine</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Search by name"
              value={search.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="border-b-2 border-black focus:outline-none w-[300px]"
            />
            <Button
              size="icon"
              className="rounded-full bg-orange-500 hover:bg-orange-600"
            >
              <FaSearch />
            </Button>
          </div>
        </div>

        <div className="flex flex-row flex-wrap">
          {medicines.map((med, index) => (
            <div
              key={index}
              className="flex-col m-[5px] w-[290px] my-[10px] h-[250px] rounded-lg border border-slate-400 overflow-hidden"
            >
              <div className=" h-[120px]">
                <img
                  src={med.photo}
                  alt="medicine"
                  className="top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex-col p-[15px]">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text">Napa Extend 500 mg</h1>
                  <Badge>{med.type}</Badge>
                </div>
                <div className="flex space-x-1">
                  <img
                    src={CategoryIcon}
                    className="w-[20px] h-[20px]"
                    alt=""
                  />
                  <p className="font-bold text-sm">{med.category}</p>
                </div>
                <div className="flex space-x-1">
                  <img src={ShopIcon} className="w-[20px] h-[20px]" alt="" />
                  <p className="font-bold text-xs pt-1">{med.manufacturer}</p>
                </div>

                {/* <div className="flex my-[10px]">
                <div className="flex mr-[10px]">
                <PiClockCountdownFill className="text-orange-400 " />
                <p className="text-xs"> {doctor.patientCount} Patients</p>
                </div>
                <div className="flex mx-[10px]">
                <TbCalendarStats className="text-orange-400 " />
                <p className="text-xs">
                {" "}
                Joined on {doctor.createdAt.split("T")[0]}{" "}
                </p>
                </div>
                <div className="flex mx-[10px]">
                <TbDeviceWatchStats2 className="text-orange-400 " />
                <p className="text-xs"> {doctor.slotCount} slots available</p>
                </div>
              </div> */}
                <hr className="border-gray-200" />
                <div className="flex items-center justify-between my-[10px]">
                  <div className="flex space-x-1 items-center justify-between">
                    <img src={AvgStar} className="w-[25px] h-[25px]" alt="" />
                    <p className="font-bold pt-1 text-sm">5.00</p>
                  </div>
                  <h1 className="font-bold hover:scale-110 transition-transform">
                    <Link to={`/doctors`}>view more</Link>
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex flex-col w-1/3 container space-y-4">
        <h1 className="font-bold text-lg">Specialization</h1>
        <RadioGroup
        defaultValue="comfortable"
          value={search.specialization}
          onValueChange={(value) => handleChange("specialization", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value={"all"} id="r1" />
            <Label htmlFor="r1">All</Label>
          </div>
          {specialization.map((sp, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={sp._id} id="r1" />
              <Label htmlFor="r1">{sp.name}</Label>
            </div>
          ))}
        </RadioGroup>

        <h1 className="font-bold text-lg">Slot Availability</h1>

        <RadioGroup
          defaultValue="comfortable"
          value={search.timerange}
          onValueChange={(value) => handleChange("timerange", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="all" id="r1" />
            <Label htmlFor="r1">All</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="today" id="r2" />
            <Label htmlFor="r2">Today</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="week" id="r3" />
            <Label htmlFor="r3">This week</Label>
          </div>
        </RadioGroup>

        <h1 className="font-bold text-lg">Fee</h1>

        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-lg">
            {search.feeLower}-{search.feeUpper}
          </h1>

          <Slider
            min={0}
            max={1000}
            value={[search.feeUpper]}
            className="w-[200px]"
            step={100}
            onValueChange={(value) => {
              setSearch({
                ...search,
                feeUpper: value[0],
              });
            }}
          />
        </div>



        <h1 className="font-bold text-lg">Review</h1>

        <RadioGroup
          defaultValue="comfortable"
          value={search.rating.toString()}
          onValueChange={(value) => handleChange("rating", value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5" id="r1" />
            <Label htmlFor="r1">5 star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="r2" />
            <Label htmlFor="r2">4+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="r3" />
            <Label htmlFor="r3">3+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="r3" />
            <Label htmlFor="r3">2+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="r3" />
            <Label htmlFor="r3">1+ star</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0" id="r3" />
            <Label htmlFor="r3">None</Label>
          </div>
        </RadioGroup>

        
      </div> */}
    </div>
  );
};

export default MediShop;
