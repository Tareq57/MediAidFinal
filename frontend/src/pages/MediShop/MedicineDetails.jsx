import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import StarIcon from "@/assets/images/avgstar.png";
import ReviewIcon from "@/assets/images/reviews.png";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MyContext } from "@/context/MyContext";

const medicine = {
  _id: "65c4cdaab99af264ac497f56",
  name: "Napa 500 mg",
  type: "Tablet",
  category: "Paracetamol",
  manufacturer: "Beximco Pharmaceuticals Ltd.",
  image:
    "https://medeasy.health/_next/image?url=https%3A%2F%2Fcdn.medeasy.health%2Fmedia%2Fmedicines%2FIMG-20231023-WA0137.jpg&w=1920&q=75",
  overview:
    "Indications of Napa 500 mg\n\nNapa 500 mg is indicated for fever, common cold and influenza, headache, toothache, earache, bodyache, myalgia, neuralgia, dysmenorrhoea, sprains, colic pain, back pain, post-operative pain, postpartum pain, inflammatory pain and post vaccination pain in children. It is also indicated for rheumatic & osteoarthritic pain and stiffness of joints.\nTheropeutic Class\n\nNon opioid analgesics\nPharmacology\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nDosage & Administration of Napa 500 mg\nTablet:\n\n    Adult: 1-2 tablets every 4 to 6 hours up to a maximum of 4 gm (8 tablets) daily.\n    Children (6-12 years): ½ to 1 tablet 3 to 4 times daily. For long term treatment it is wise not to exceed the dose beyond 2.6 gm/day.\n\nExtended Release Tablet:\n\n    Adults & Children over 12 years: Two tablets, swallowed whole, every 6 to 8 hours (maximum of 6 tablets in any 24 hours).The tablet must not be crushed.\n\nSyrup/Suspension:\n\n    Children under 3 months: 10 mg/kg body weight (reduce to 5 mg/kg if jaundiced) 3 to 4 times daily.\n    3 months to below 1 year: ½ to 1 teaspoonful 3 to 4 times daily.\n    1-5 years: 1 -2 teaspoonful 3 to 4 times daily.\n    6-12 years: 2-A teaspoonful 3 to 4 times daily.\n    Adults: 4-8 teaspoonful 3 to 4 times daily.\n\nSuppository:\n\n    Children 3-12 months: 60-120 mg,4 times daily.\n    Children 1-5 years: 125-250 mg 4 times daily.\n    Children 6-12 years: 250-500 mg 4 times daily.\n    Adults & children over 12 years: 0.5-1 gm 4 times daily.\n\nPaediatric Drop:\n\n    Children Upto 3 months: 0.5 ml (40 mg)\n    4 to 11 months: 1.0 ml (80 mg)\n    7 to 2 years: 1.5 ml (120 mg). Do not exceed more than 5 dose daily for a maximum of 5 days.\n\nNapa 500 mg tablet with actizorb technology: It dissolves up to five times faster than standard Napa 500 mg tablets. It is a fast acting and safe analgesic with marked antipyretic property. It is specially suitable for patients who, for any reason, can not tolerate aspirin or other analgesics.\n\n    Adults and children (aged 12 years and over): Take 1 to 2 Tablets every four to six hours as needed. Do not take more than 8 caplets in 24 hours.\n    Children (7 to 11 years): Take ½-1 Tablet every four to six hours as needed. Do not take more than 4 caplets in 24 hours. Not recommended in children under 7 years.\n\nInteraction of Napa 500 mg\n\nPatients who have taken barbiturates, tricyclic antidepressants and alcohol may show diminished ability to metabolise large doses of Napa 500 mg. Alcohol can increase the hepatotoxicity of Napa 500 mg overdosage. Chronic ingestion of anticonvulsants or oral steroid contraceptives induce liver enzymes and may prevent attainment of therapeutic Napa 500 mg levels by increasing first-pass metabolism or clearance.\nContraindications\n\nIt is contraindicated in known hypersensitivity to Napa 500 mg.\nSide Effects of Napa 500 mg\n\nSide effects of Napa 500 mg are usually mild, though haematological reactions including thrombocytopenia, leucopenia, pancytopenia, neutropenia, and agranulocytosis have been reported. Pancreatitis, skin rashes, and other allergic reactions occur occasionally.\nPregnancy & Lactation\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed\nPrecautions & Warnings\n\nNapa 500 mg should be given with caution to patients with impaired kidney or liver function. Napa 500 mg should be given with care to patients taking other drugs that affect the liver.\nOverdose Effects of Napa 500 mg\n\nSymptoms of Napa 500 mg overdose in the first 24 hours are pallor, nausea, vomiting, anorexia and abdominal pain. Liver damage may become apparent 12-48 hours after ingestion. Abnormalities of glucose metabolism and metabolic acidosis may occur.\nStorage Conditions\n\nKeep in a dry place away from light and heat. Keep out of the reach of children.\nDrug Classes\n\nNon opioid analgesics\nMode Of Action\n\nNapa 500 mg has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg (Acetaminophen) is thought to act primarily in the CNS, increasing the pain threshold by inhibiting both isoforms of cyclooxygenase, COX-1, COX-2, and COX-3 enzymes involved in prostaglandin (PG) synthesis. Napa 500 mg is a para aminophenol derivative, has analgesic and antipyretic properties with weak anti-inflammatory activity. Napa 500 mg is one of the most widely used, safest and fast acting analgesic. It is well tolerated and free from various side effects of aspirin.\nPregnancy\n\nPregnancy category B according to USFDA. This drug should be used during pregnancy only if clearly needed.  Napa 500 mg is excreted in breast milk. Maternal ingestion of Napa 500 mg in normal therapeutic doses does not appear to present a risk to the nursing infant.",
  avgStars: 4,
  reviewCount: 1,
  __v: 0,
};

const MedicineDetails = () => {
  const { state } = useContext(AuthContext);

  const [navClass, setNavClass] = useState("overview");

  return (
    <div className="flex-col mx-[180px] mt-[40px] space-x-10">
      <div className="h-[170px] bg-black w-full relative p-10 rounded-lg">
        <div className="flex w-1/2 justify-between">
          <p className="font-bold text-3xl text-white">
            {medicine.name}({medicine.category})
          </p>
          <div className="mt-2">
            <Badge variant="secondary">{medicine.type}</Badge>
          </div>
        </div>

        <div className="flex space-x-5 mt-[5px]">
          <div className="flex space-x-1 items-center justify-center">
            <img src={StarIcon} className="w-[25px] h-[25px]" alt="" />
            <p className="text-white font-bold">
              {medicine.avgStars.toFixed(2)}
            </p>
          </div>
          <div className="flex space-x-1">
            <img src={ReviewIcon} className="w-[25px] h-[25px]" alt="" />
            <p className="text-white font-bold">
              {medicine.reviewCount} reviews
            </p>
          </div>
        </div>

        <div>
          <p className="text-white font-bold">{medicine.manufacturer}</p>
        </div>
      </div>
      <img
        src={medicine.image}
        className="w-[400px] absolute right-[220px] top-[150px] rounded-2xl"
        alt=""
      />

      <div className="flex space-x-2 mt-5">
        <NavLink
          to="overview"
          className={(navClass) =>
            navClass.isActive ? setNavClass("overview") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "overview"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } px-2 rounded-full cursor-pointer`}
          >
            <h1 className="font-semibold">Overview</h1>
          </div>
        </NavLink>
        <NavLink
          to="reviews"
          className={(navClass) =>
            navClass.isActive ? setNavClass("reviews") : null
          }
        >
          <div
            className={`flex items-center space-x-2   ${
              navClass == "reviews"
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            } px-2 rounded-full cursor-pointer`}
          >
            <h1 className="font-semibold">Reviews </h1>
          </div>
        </NavLink>
      </div>
      <hr className="border border-black mt-2 w-1/2" />
      <div className="w-1/2">
        <MyContext.Provider value={medicine}>
          <Outlet />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default MedicineDetails;
