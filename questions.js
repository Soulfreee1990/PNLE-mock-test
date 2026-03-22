const QUESTIONS = [

  // ─── FUNDAMENTALS OF NURSING (20 questions) ───────────────────────────────
  {
    id: 1,
    subject: "Fundamentals of Nursing",
    question: "A nurse is preparing to perform hand hygiene using an alcohol-based hand rub. Which situation requires handwashing with soap and water instead?",
    choices: [
      "After removing gloves following a routine assessment",
      "Before administering oral medications",
      "When hands are visibly soiled with blood",
      "After touching a patient's intact skin"
    ],
    answer: 2,
    explanation: "Alcohol-based hand rubs are effective for most situations, but when hands are visibly soiled with blood, body fluids, or other organic material, soap and water must be used. Alcohol cannot physically remove organic matter."
  },
  {
    id: 2,
    subject: "Fundamentals of Nursing",
    question: "When performing a physical assessment, which technique should the nurse use LAST when assessing the abdomen?",
    choices: [
      "Inspection",
      "Auscultation",
      "Percussion",
      "Palpation"
    ],
    answer: 3,
    explanation: "When assessing the abdomen, the order is: inspection → auscultation → percussion → palpation. Palpation is done last because it can alter bowel sounds and distort findings if done before auscultation."
  },
  {
    id: 3,
    subject: "Fundamentals of Nursing",
    question: "A nurse is preparing to insert a urinary catheter for a female patient. Which action demonstrates correct technique?",
    choices: [
      "Cleansing the meatus using a circular motion from outer to inner",
      "Inserting the catheter 2–3 cm until urine flows",
      "Cleansing the labia minora before the meatus, moving from front to back",
      "Using the same cotton ball for multiple cleansing strokes"
    ],
    answer: 2,
    explanation: "For female catheterization, cleansing should proceed from the inner labia to the meatus using a front-to-back motion with separate cotton balls for each stroke, maintaining sterile technique throughout."
  },
  {
    id: 4,
    subject: "Fundamentals of Nursing",
    question: "A patient's chart shows a respiratory rate of 8 breaths per minute. The nurse correctly documents this as:",
    choices: [
      "Tachypnea",
      "Bradypnea",
      "Apnea",
      "Hyperpnea"
    ],
    answer: 1,
    explanation: "Bradypnea refers to an abnormally slow respiratory rate (fewer than 12 breaths per minute in adults). Tachypnea is rapid breathing; apnea is absence of breathing; hyperpnea is deep, increased breathing."
  },
  {
    id: 5,
    subject: "Fundamentals of Nursing",
    question: "When positioning a patient who is unconscious, the nurse should place the patient in which position to prevent aspiration?",
    choices: [
      "Supine with head flat",
      "Trendelenburg position",
      "Lateral (recovery) position",
      "High Fowler's position"
    ],
    answer: 2,
    explanation: "The lateral (recovery) position allows drainage of secretions from the mouth, prevents the tongue from falling back, and reduces the risk of aspiration in unconscious patients."
  },
  {
    id: 6,
    subject: "Fundamentals of Nursing",
    question: "The nurse is preparing to administer a medication via IM injection to an adult patient. Which site is MOST preferred for large-volume IM injections?",
    choices: [
      "Deltoid muscle",
      "Vastus lateralis",
      "Ventrogluteal site",
      "Dorsogluteal site"
    ],
    answer: 2,
    explanation: "The ventrogluteal site is the preferred IM injection site for adults as it is free from major nerves and blood vessels, has a thick muscle mass, and has a lower risk of complications compared to the dorsogluteal site."
  },
  {
    id: 7,
    subject: "Fundamentals of Nursing",
    question: "A patient has a nursing diagnosis of 'Impaired Skin Integrity related to prolonged pressure.' Which nursing intervention has the HIGHEST priority?",
    choices: [
      "Apply moisturizing lotion to the skin twice daily",
      "Reposition the patient every 2 hours",
      "Encourage a high-protein diet",
      "Document the wound appearance daily"
    ],
    answer: 1,
    explanation: "Repositioning every 2 hours is the most critical intervention to relieve pressure, restore circulation, and prevent further skin breakdown. It directly addresses the cause of impaired skin integrity."
  },
  {
    id: 8,
    subject: "Fundamentals of Nursing",
    question: "When administering oxygen via nasal cannula, the nurse knows that a flow rate of 2 L/min delivers approximately what percentage of oxygen?",
    choices: [
      "24%",
      "28%",
      "36%",
      "44%"
    ],
    answer: 1,
    explanation: "With a nasal cannula, each liter per minute adds approximately 4% oxygen above the baseline 20% room air. At 2 L/min: 20% + (2 × 4%) = 28% FiO2."
  },
  {
    id: 9,
    subject: "Fundamentals of Nursing",
    question: "The nurse is planning care using Maslow's hierarchy of needs. Which patient need should be addressed FIRST?",
    choices: [
      "A patient expressing loneliness and isolation",
      "A patient with low self-esteem",
      "A patient with a blocked airway",
      "A patient requesting information about their diagnosis"
    ],
    answer: 2,
    explanation: "According to Maslow's hierarchy, physiological needs (such as airway, breathing, circulation) are the most basic and must be addressed first. A blocked airway is immediately life-threatening."
  },
  {
    id: 10,
    subject: "Fundamentals of Nursing",
    question: "A nurse is preparing to perform a sterile dressing change. Which action breaks sterile technique?",
    choices: [
      "Opening the sterile package away from the body",
      "Placing sterile items at the edge of the sterile field",
      "Keeping sterile items above the waist level",
      "Reaching over the sterile field to place an item"
    ],
    answer: 3,
    explanation: "Reaching over a sterile field contaminates it because microorganisms can fall from the arm, clothing, or hand onto the sterile items. Sterile technique requires that you never reach over or turn your back on the sterile field."
  },
  {
    id: 11,
    subject: "Fundamentals of Nursing",
    question: "Which of the following is an example of a correctly written nursing diagnosis?",
    choices: [
      "Impaired gas exchange related to pneumonia",
      "Pneumonia as evidenced by productive cough",
      "Impaired gas exchange related to low oxygen saturation",
      "Respiratory problem due to smoking history"
    ],
    answer: 0,
    explanation: "A correctly written nursing diagnosis follows the PES format: Problem (Impaired gas exchange), Etiology/Related factor (related to pneumonia — a medical condition used as etiology), and Signs/symptoms. The cause should be the related factor, not a symptom."
  },
  {
    id: 12,
    subject: "Fundamentals of Nursing",
    question: "The nurse is assessing a patient's pain. Which statement BEST reflects the nurse's understanding of pain management?",
    choices: [
      "Pain is only present if there is an observable physical cause",
      "Pain is whatever the patient says it is",
      "Older patients have a higher pain tolerance and require less medication",
      "Vital sign changes are the most reliable indicators of pain"
    ],
    answer: 1,
    explanation: "Pain is a subjective experience — it is whatever the patient says it is, occurring whenever they say it does. McCaffery's definition is the foundation of patient-centered pain assessment in nursing."
  },
  {
    id: 13,
    subject: "Fundamentals of Nursing",
    question: "A patient is prescribed 500 mg of amoxicillin. Available tablets are 250 mg each. How many tablets should the nurse administer?",
    choices: [
      "0.5 tablet",
      "1 tablet",
      "2 tablets",
      "3 tablets"
    ],
    answer: 2,
    explanation: "Using the formula: Dose ordered ÷ Dose available = 500 mg ÷ 250 mg = 2 tablets."
  },
  {
    id: 14,
    subject: "Fundamentals of Nursing",
    question: "The nurse is providing range-of-motion exercises to a bedridden patient. The PRIMARY purpose of this intervention is to:",
    choices: [
      "Promote cardiovascular fitness",
      "Prevent contractures and maintain joint mobility",
      "Stimulate appetite and bowel function",
      "Reduce the risk of pressure ulcer formation"
    ],
    answer: 1,
    explanation: "Range-of-motion exercises maintain joint flexibility and muscle tone, and prevent contractures — the abnormal shortening of muscles and joints that occurs from prolonged immobility."
  },
  {
    id: 15,
    subject: "Fundamentals of Nursing",
    question: "A patient's urine output over 8 hours is 200 mL. The nurse interprets this as:",
    choices: [
      "Normal output for an adult",
      "Polyuria",
      "Oliguria",
      "Anuria"
    ],
    answer: 2,
    explanation: "Normal adult urine output is at least 30 mL/hour or approximately 240 mL over 8 hours. An output of 200 mL over 8 hours (25 mL/hour) falls below normal, indicating oliguria (decreased urine output)."
  },
  {
    id: 16,
    subject: "Fundamentals of Nursing",
    question: "Which of the following BEST describes the purpose of the nursing process?",
    choices: [
      "To ensure nurses follow physician orders accurately",
      "To provide a systematic, individualized approach to patient care",
      "To document nursing activities for legal protection",
      "To standardize care so all patients receive the same treatment"
    ],
    answer: 1,
    explanation: "The nursing process (Assessment, Diagnosis, Planning, Implementation, Evaluation) provides a systematic, patient-centered framework for delivering individualized, evidence-based care."
  },
  {
    id: 17,
    subject: "Fundamentals of Nursing",
    question: "A patient is on contact precautions. Which PPE must the nurse wear upon entering the room?",
    choices: [
      "Mask and goggles only",
      "Gloves only",
      "Gown and gloves",
      "N95 respirator and gloves"
    ],
    answer: 2,
    explanation: "Contact precautions require the nurse to wear a gown and gloves upon entry into the patient's room to prevent transmission of organisms through direct or indirect contact."
  },
  {
    id: 18,
    subject: "Fundamentals of Nursing",
    question: "The nurse is evaluating a patient's learning after health teaching. Which method BEST evaluates understanding?",
    choices: [
      "Ask the patient if they understood",
      "Provide a written summary to review later",
      "Have the patient demonstrate the skill or explain in their own words",
      "Show a video related to the topic"
    ],
    answer: 2,
    explanation: "Return demonstration or having the patient explain in their own words (teach-back method) is the most effective way to evaluate whether learning has truly occurred, going beyond simple acknowledgment."
  },
  {
    id: 19,
    subject: "Fundamentals of Nursing",
    question: "When documenting in a patient's medical record, which principle must the nurse follow?",
    choices: [
      "Use correction fluid to remove errors",
      "Document care before it is performed to save time",
      "Record objective and subjective data accurately and in a timely manner",
      "Avoid documenting patient complaints to prevent legal issues"
    ],
    answer: 2,
    explanation: "Accurate, objective, timely, and complete documentation is a legal and ethical nursing responsibility. Errors must be corrected by drawing a single line, and care must be documented after it is performed."
  },
  {
    id: 20,
    subject: "Fundamentals of Nursing",
    question: "The nurse is preparing to administer an IV medication. Before administration, which assessment is MOST critical?",
    choices: [
      "Check the patient's pain level",
      "Verify IV site patency and check for signs of infiltration",
      "Assess the patient's blood pressure",
      "Review the patient's allergy to food"
    ],
    answer: 1,
    explanation: "Before IV medication administration, verifying IV site patency is critical. Infiltration (fluid leaking into surrounding tissue) can cause severe tissue damage, especially with vesicant medications."
  },

  // ─── COMMUNITY HEALTH NURSING (20 questions) ─────────────────────────────
  {
    id: 21,
    subject: "Community Health Nursing",
    question: "In community health nursing, the PRIMARY goal is to:",
    choices: [
      "Treat communicable diseases in the community",
      "Provide hospital-based care to community members",
      "Promote health and prevent disease in the population",
      "Conduct research on community health problems"
    ],
    answer: 2,
    explanation: "The primary goal of community health nursing is health promotion and disease prevention at the population level, focusing on the community as a whole rather than individual patients."
  },
  {
    id: 22,
    subject: "Community Health Nursing",
    question: "A community health nurse is conducting an epidemiological investigation of a disease outbreak. The attack rate is calculated as:",
    choices: [
      "Number of deaths ÷ Total population × 1,000",
      "Number of new cases ÷ Population at risk × 100",
      "Number of existing cases ÷ Total population × 100",
      "Number of recovered cases ÷ Total cases × 100"
    ],
    answer: 1,
    explanation: "The attack rate is the proportion of people in the at-risk population who develop the disease during an outbreak. It is calculated as: (number of new cases ÷ population at risk) × 100."
  },
  {
    id: 23,
    subject: "Community Health Nursing",
    question: "The Expanded Program on Immunization (EPI) in the Philippines includes vaccines for all of the following EXCEPT:",
    choices: [
      "Tuberculosis (BCG)",
      "Hepatitis B",
      "Varicella (chickenpox)",
      "Measles, Mumps, Rubella (MMR)"
    ],
    answer: 2,
    explanation: "Varicella vaccine is not part of the Philippine government's standard EPI. The EPI includes BCG, Hepatitis B, DPT-HepB-Hib (Pentavalent), OPV/IPV, PCV, Rotavirus, MMR, and Influenza for eligible children."
  },
  {
    id: 24,
    subject: "Community Health Nursing",
    question: "In the epidemiological triad, which component refers to environmental factors that influence disease occurrence?",
    choices: [
      "Host",
      "Agent",
      "Environment",
      "Vector"
    ],
    answer: 2,
    explanation: "The epidemiological triad consists of Host, Agent, and Environment. The Environment includes all external factors — physical, biological, and social — that influence the interaction between host and agent."
  },
  {
    id: 25,
    subject: "Community Health Nursing",
    question: "A nurse is conducting a home visit. Which action reflects the concept of 'family as the unit of care'?",
    choices: [
      "Providing treatment only to the identified sick family member",
      "Assessing and addressing the health needs of all family members",
      "Referring all family members to the hospital for evaluation",
      "Focusing care on the family member who requested the visit"
    ],
    answer: 1,
    explanation: "In community health nursing, the family is considered the unit of care. The nurse assesses the health status of all family members and addresses the family's collective health needs, not just the presenting patient."
  },
  {
    id: 26,
    subject: "Community Health Nursing",
    question: "The term 'incidence rate' in epidemiology refers to:",
    choices: [
      "Total number of existing cases in a population at a given time",
      "Number of new cases of a disease occurring in a population over a specific time period",
      "Number of deaths caused by a specific disease per 1,000 population",
      "Proportion of people who recovered from a disease"
    ],
    answer: 1,
    explanation: "Incidence rate measures the frequency of NEW cases of a disease in a defined population over a specific time period. It reflects the risk of developing the disease."
  },
  {
    id: 27,
    subject: "Community Health Nursing",
    question: "Which level of prevention involves early detection and prompt treatment of disease?",
    choices: [
      "Primary prevention",
      "Secondary prevention",
      "Tertiary prevention",
      "Primordial prevention"
    ],
    answer: 1,
    explanation: "Secondary prevention aims to detect disease early and treat it promptly to halt its progression. Examples include screening programs, early diagnosis, and treatment of conditions like tuberculosis or hypertension."
  },
  {
    id: 28,
    subject: "Community Health Nursing",
    question: "The community health nurse is the MOST appropriate person to perform which activity?",
    choices: [
      "Prescribe antibiotics for a patient with pneumonia",
      "Perform surgery on an infected wound",
      "Conduct a community health assessment and develop a community health plan",
      "Diagnose a patient with tuberculosis"
    ],
    answer: 2,
    explanation: "Conducting community health assessments and developing health plans is a core function of the community health nurse. Prescribing medications, surgery, and diagnosis are outside the nursing scope of practice."
  },
  {
    id: 29,
    subject: "Community Health Nursing",
    question: "In the Philippines, the primary law governing the nursing profession is:",
    choices: [
      "Republic Act 7160",
      "Republic Act 9173",
      "Republic Act 4226",
      "Republic Act 8344"
    ],
    answer: 1,
    explanation: "Republic Act 9173, or the Philippine Nursing Act of 2002, is the primary law governing the nursing profession in the Philippines. It defines nursing practice, qualifications, and responsibilities."
  },
  {
    id: 30,
    subject: "Community Health Nursing",
    question: "A barangay health worker reports an increase in diarrhea cases among children under 5. The community health nurse's FIRST action should be to:",
    choices: [
      "Immediately distribute oral rehydration solution to all families",
      "Conduct a rapid assessment to determine the extent and cause of the problem",
      "Report the situation to the Department of Health",
      "Organize a community meeting to discuss proper handwashing"
    ],
    answer: 1,
    explanation: "Before implementing any intervention, the nurse must first conduct a rapid assessment to identify the extent of the outbreak, its likely cause, and affected populations — this guides appropriate and targeted action."
  },
  {
    id: 31,
    subject: "Community Health Nursing",
    question: "The BCG vaccine is given to newborns to provide protection against:",
    choices: [
      "Hepatitis B",
      "Severe forms of tuberculosis",
      "Pertussis",
      "Measles"
    ],
    answer: 1,
    explanation: "BCG (Bacillus Calmette-Guérin) vaccine is given at birth to protect against severe forms of tuberculosis in children, particularly TB meningitis and miliary TB, which are life-threatening."
  },
  {
    id: 32,
    subject: "Community Health Nursing",
    question: "In the COPAR (Community Organizing Participatory Action Research) process, which phase involves identifying community leaders and building relationships?",
    choices: [
      "Community organization",
      "Community study",
      "Community integration",
      "Community action"
    ],
    answer: 2,
    explanation: "Community integration is the phase in COPAR where the health worker enters the community, builds trust, identifies key leaders, and develops relationships with community members to facilitate participation."
  },
  {
    id: 33,
    subject: "Community Health Nursing",
    question: "A communicable disease with a short incubation period and high attack rate is MOST likely to be transmitted via:",
    choices: [
      "Direct contact",
      "Vector-borne transmission",
      "Contaminated food or water",
      "Airborne droplet nuclei"
    ],
    answer: 2,
    explanation: "Diseases with explosive onset and high attack rates in a group are characteristic of common source outbreaks — most often foodborne or waterborne, where many people are exposed to the same contaminated source simultaneously."
  },
  {
    id: 34,
    subject: "Community Health Nursing",
    question: "Which of the following BEST describes 'herd immunity'?",
    choices: [
      "Individual immunity acquired through vaccination",
      "Immunity acquired through direct exposure to a pathogen",
      "Indirect protection of unvaccinated individuals when a sufficient proportion of the population is immune",
      "Immunity passed from mother to newborn through breastfeeding"
    ],
    answer: 2,
    explanation: "Herd immunity (community immunity) occurs when a sufficiently large proportion of a population is immune to a disease — through vaccination or prior infection — reducing the likelihood of infection for unimmunized individuals."
  },
  {
    id: 35,
    subject: "Community Health Nursing",
    question: "The nurse is conducting a home visit for a newly diagnosed TB patient. The MOST important teaching point is:",
    choices: [
      "Rest and limit physical activity for 6 months",
      "Adhere to the complete DOTS treatment regimen",
      "Isolate completely from all family members",
      "Report to the health center only when symptoms worsen"
    ],
    answer: 1,
    explanation: "Adherence to the complete Directly Observed Treatment Short-Course (DOTS) regimen is the cornerstone of TB treatment. Incomplete treatment leads to drug resistance and treatment failure."
  },
  {
    id: 36,
    subject: "Community Health Nursing",
    question: "A community health nurse is computing the infant mortality rate. Which formula is correct?",
    choices: [
      "Number of infant deaths ÷ Total population × 1,000",
      "Number of infant deaths ÷ Number of live births × 1,000",
      "Number of neonatal deaths ÷ Total births × 1,000",
      "Number of infant deaths ÷ Total deaths × 100"
    ],
    answer: 1,
    explanation: "Infant Mortality Rate (IMR) = (Number of deaths of infants under 1 year ÷ Number of live births in the same year) × 1,000. It is a key indicator of community and national health status."
  },
  {
    id: 37,
    subject: "Community Health Nursing",
    question: "Which nutrient deficiency is MOST commonly associated with goiter in the Philippines?",
    choices: [
      "Iron",
      "Vitamin A",
      "Iodine",
      "Calcium"
    ],
    answer: 2,
    explanation: "Iodine deficiency is the most common cause of goiter (enlargement of the thyroid gland). In the Philippines, iodized salt and iodine supplementation programs address this public health concern."
  },
  {
    id: 38,
    subject: "Community Health Nursing",
    question: "During a disaster response, the community health nurse's FIRST priority is:",
    choices: [
      "Documenting all injuries and deaths",
      "Ensuring personal safety and safety of the team",
      "Setting up a first aid station",
      "Notifying the media about the disaster"
    ],
    answer: 1,
    explanation: "In all emergency and disaster situations, personal safety and team safety are the first priority. A nurse who is injured cannot provide care to others — safety assessment must precede any intervention."
  },
  {
    id: 39,
    subject: "Community Health Nursing",
    question: "The APGAR scoring system evaluates a newborn's condition at 1 and 5 minutes after birth. Which parameter is NOT included in APGAR?",
    choices: [
      "Appearance (skin color)",
      "Pulse (heart rate)",
      "Glucose level",
      "Reflex irritability"
    ],
    answer: 2,
    explanation: "APGAR scores assess: Appearance (color), Pulse (heart rate), Grimace (reflex irritability), Activity (muscle tone), and Respiration. Glucose level is not part of the APGAR assessment."
  },
  {
    id: 40,
    subject: "Community Health Nursing",
    question: "Oral rehydration therapy (ORT) is the recommended first-line management for:",
    choices: [
      "Mild to moderate dehydration from diarrhea",
      "Severe dehydration with shock",
      "Dehydration with persistent vomiting",
      "Neonatal dehydration"
    ],
    answer: 0,
    explanation: "ORT (oral rehydration salts solution) is the WHO-recommended first-line treatment for mild to moderate dehydration caused by diarrhea. Severe dehydration and dehydration with persistent vomiting require IV rehydration."
  },

  // ─── MEDICAL-SURGICAL NURSING (20 questions) ─────────────────────────────
  {
    id: 41,
    subject: "Medical-Surgical Nursing",
    question: "A patient arrives in the emergency department following a myocardial infarction. The nurse identifies which ECG finding as MOST characteristic of an acute MI?",
    choices: [
      "Prolonged PR interval",
      "ST segment elevation",
      "Widened QRS complex",
      "Inverted P wave"
    ],
    answer: 1,
    explanation: "ST segment elevation is the hallmark ECG finding of an acute ST-elevation myocardial infarction (STEMI). It indicates acute myocardial injury and is the basis for immediate reperfusion therapy."
  },
  {
    id: 42,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic kidney disease has a serum potassium level of 6.5 mEq/L. Which assessment finding requires IMMEDIATE nursing intervention?",
    choices: [
      "Urine output of 40 mL/hour",
      "Blood pressure of 148/92 mmHg",
      "Irregular cardiac rhythm on the monitor",
      "Mild pedal edema"
    ],
    answer: 2,
    explanation: "Hyperkalemia (K+ > 5.5 mEq/L) causes cardiac dysrhythmias, which can be life-threatening. An irregular cardiac rhythm in a patient with K+ of 6.5 mEq/L requires immediate intervention to prevent cardiac arrest."
  },
  {
    id: 43,
    subject: "Medical-Surgical Nursing",
    question: "A patient with type 1 diabetes mellitus develops diaphoresis, tremors, and confusion. The nurse should FIRST:",
    choices: [
      "Administer insulin as prescribed",
      "Check blood glucose level",
      "Give 15–20 grams of fast-acting carbohydrates orally",
      "Call the physician immediately"
    ],
    answer: 1,
    explanation: "The first step in managing suspected hypoglycemia is to confirm the blood glucose level. While symptoms are suggestive, the nurse must verify before treating — once confirmed low, fast-acting carbohydrates are given (the '15-15 rule')."
  },
  {
    id: 44,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-thyroidectomy develops carpopedal spasms and tingling around the mouth. The nurse suspects:",
    choices: [
      "Thyroid storm",
      "Hypocalcemia due to parathyroid injury",
      "Respiratory obstruction from laryngeal edema",
      "Hemorrhage from the surgical site"
    ],
    answer: 1,
    explanation: "Carpopedal spasms and perioral tingling are signs of hypocalcemia (Trousseau's and Chvostek's signs), which can occur post-thyroidectomy if the parathyroid glands are accidentally removed or damaged, reducing PTH and calcium levels."
  },
  {
    id: 45,
    subject: "Medical-Surgical Nursing",
    question: "A patient is admitted with acute pancreatitis. The nurse should place the patient in which position for comfort?",
    choices: [
      "Supine with legs extended",
      "Prone position",
      "Fetal position (knees drawn to chest)",
      "Trendelenburg position"
    ],
    answer: 2,
    explanation: "The fetal position (lying on the side with knees drawn to the chest) reduces pain in acute pancreatitis by reducing tension on the inflamed pancreas and decreasing abdominal pressure."
  },
  {
    id: 46,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a fractured femur is placed in skeletal traction. The nurse's priority assessment includes:",
    choices: [
      "Checking the weights are hanging freely and not touching the floor",
      "Removing the weights when repositioning the patient",
      "Assessing pin sites daily for signs of infection",
      "Covering the exposed pin ends with tape"
    ],
    answer: 2,
    explanation: "Pin site infection is a major complication of skeletal traction. Daily assessment of pin sites for redness, swelling, drainage, and warmth is a priority nursing responsibility."
  },
  {
    id: 47,
    subject: "Medical-Surgical Nursing",
    question: "Which of the following ABG results indicates respiratory acidosis?",
    choices: [
      "pH 7.50, PaCO2 30, HCO3 22",
      "pH 7.30, PaCO2 55, HCO3 24",
      "pH 7.48, PaCO2 40, HCO3 30",
      "pH 7.32, PaCO2 38, HCO3 18"
    ],
    answer: 1,
    explanation: "Respiratory acidosis: pH < 7.35 (acidosis) and PaCO2 > 45 mmHg (elevated CO2 = respiratory cause). In this option, pH is 7.30 (acidotic) and PaCO2 is 55 (elevated), indicating respiratory acidosis with normal HCO3 (uncompensated)."
  },
  {
    id: 48,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a head injury has a Glasgow Coma Scale (GCS) score of 8. The nurse correctly interprets this as:",
    choices: [
      "Mild traumatic brain injury",
      "Moderate traumatic brain injury",
      "Severe traumatic brain injury",
      "Normal neurological function"
    ],
    answer: 2,
    explanation: "A GCS score of 8 or below indicates severe traumatic brain injury. Scores of 13–15 indicate mild TBI; 9–12 indicate moderate TBI. A GCS of 8 or less is also the threshold for considering endotracheal intubation."
  },
  {
    id: 49,
    subject: "Medical-Surgical Nursing",
    question: "The nurse is caring for a patient with a chest tube. Which assessment finding requires IMMEDIATE action?",
    choices: [
      "Fluctuation (tidaling) in the water seal chamber",
      "Gentle bubbling in the suction control chamber",
      "Continuous bubbling in the water seal chamber",
      "Blood-tinged drainage in the collection chamber"
    ],
    answer: 2,
    explanation: "Continuous bubbling in the water seal chamber (when not connected to suction) indicates an air leak in the system. Tidaling is normal; gentle suction bubbling is expected; blood-tinged drainage is expected post-surgery but requires monitoring."
  },
  {
    id: 50,
    subject: "Medical-Surgical Nursing",
    question: "A patient is prescribed warfarin therapy. The nurse knows the antidote for warfarin overdose is:",
    choices: [
      "Protamine sulfate",
      "Vitamin K",
      "Naloxone",
      "Flumazenil"
    ],
    answer: 1,
    explanation: "Vitamin K (phytonadione) is the antidote for warfarin overdose. Protamine sulfate reverses heparin; naloxone reverses opioids; flumazenil reverses benzodiazepines."
  },
  {
    id: 51,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic obstructive pulmonary disease (COPD) requires supplemental oxygen. The nurse administers oxygen at which flow rate to avoid suppressing the hypoxic drive?",
    choices: [
      "1–2 L/min via nasal cannula",
      "6–8 L/min via simple face mask",
      "10 L/min via partial rebreather mask",
      "15 L/min via non-rebreather mask"
    ],
    answer: 0,
    explanation: "Patients with COPD rely on hypoxic drive for breathing stimulation. High-flow oxygen can suppress this drive and cause respiratory depression. Low-flow oxygen (1–2 L/min) is used to maintain SpO2 at 88–92%."
  },
  {
    id: 52,
    subject: "Medical-Surgical Nursing",
    question: "A patient is 24 hours post-appendectomy. The nurse assesses the abdomen and notes absent bowel sounds. The MOST appropriate action is to:",
    choices: [
      "Encourage the patient to walk in the hallway",
      "Immediately notify the physician",
      "Administer the prescribed laxative",
      "Document the finding as expected and continue monitoring"
    ],
    answer: 3,
    explanation: "Absent or hypoactive bowel sounds are expected in the first 24–48 hours after abdominal surgery due to the effects of anesthesia and bowel manipulation. This is a normal finding that requires documentation and monitoring."
  },
  {
    id: 53,
    subject: "Medical-Surgical Nursing",
    question: "The nurse is caring for a patient receiving a blood transfusion. After 15 minutes, the patient develops chills, fever, and flank pain. The nurse's FIRST action is to:",
    choices: [
      "Slow the transfusion rate",
      "Administer an antihistamine as prescribed",
      "Stop the transfusion immediately",
      "Notify the physician and continue monitoring"
    ],
    answer: 2,
    explanation: "Chills, fever, and flank pain are classic signs of an acute hemolytic transfusion reaction — a life-threatening emergency. The transfusion must be stopped immediately, IV access kept open with normal saline, and the physician notified."
  },
  {
    id: 54,
    subject: "Medical-Surgical Nursing",
    question: "A patient has been diagnosed with deep vein thrombosis (DVT) of the left leg. Which nursing intervention is CONTRAINDICATED?",
    choices: [
      "Maintaining bed rest with leg elevated",
      "Massaging the affected leg to promote circulation",
      "Administering anticoagulant therapy as prescribed",
      "Monitoring for signs of pulmonary embolism"
    ],
    answer: 1,
    explanation: "Massaging a limb with DVT is contraindicated because it can dislodge the clot and cause a pulmonary embolism, which can be fatal. The affected leg should be kept elevated and immobilized."
  },
  {
    id: 55,
    subject: "Medical-Surgical Nursing",
    question: "Which of the following findings in a patient with increased intracranial pressure (ICP) represents Cushing's triad?",
    choices: [
      "Hypotension, tachycardia, and shallow breathing",
      "Hypertension, bradycardia, and irregular respiration",
      "Fever, tachypnea, and altered mental status",
      "Hypotension, bradycardia, and deep breathing"
    ],
    answer: 1,
    explanation: "Cushing's triad — hypertension (widening pulse pressure), bradycardia, and irregular respirations — is a late, ominous sign of severely increased ICP indicating impending brain herniation."
  },
  {
    id: 56,
    subject: "Medical-Surgical Nursing",
    question: "A patient with liver cirrhosis develops abdominal ascites. The nurse monitors for which serious complication associated with large-volume paracentesis?",
    choices: [
      "Hypokalemia",
      "Hypoglycemia",
      "Hypovolemia and hemodynamic instability",
      "Respiratory alkalosis"
    ],
    answer: 2,
    explanation: "Rapid removal of large volumes of ascitic fluid can cause a fluid shift from the vascular space into the peritoneal cavity, resulting in hypovolemia and hemodynamic instability. Albumin infusion is often given concurrently to prevent this."
  },
  {
    id: 57,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a suspected spinal cord injury is brought to the emergency department. The nurse's FIRST priority is to:",
    choices: [
      "Perform a complete neurological assessment",
      "Immobilize the spine and maintain cervical alignment",
      "Obtain a urine specimen for urinalysis",
      "Insert a urinary catheter to monitor urine output"
    ],
    answer: 1,
    explanation: "Immobilizing the spine and maintaining cervical alignment is the first priority to prevent further spinal cord injury. Any unnecessary movement could worsen neurological damage."
  },
  {
    id: 58,
    subject: "Medical-Surgical Nursing",
    question: "A patient with burns covering 36% of the total body surface area (TBSA) is in the emergent phase. Which IV fluid is MOST appropriate for initial resuscitation?",
    choices: [
      "5% Dextrose in water (D5W)",
      "Lactated Ringer's solution",
      "50% Dextrose solution",
      "Albumin infusion"
    ],
    answer: 1,
    explanation: "Lactated Ringer's solution (an isotonic crystalloid) is the standard IV fluid used for initial burn resuscitation per the Parkland formula. D5W is not used as it does not replace the plasma-like fluid lost in burns."
  },
  {
    id: 59,
    subject: "Medical-Surgical Nursing",
    question: "The nurse is preparing a patient for a colonoscopy. Which instruction is MOST important?",
    choices: [
      "Avoid taking any oral medications the morning of the procedure",
      "Complete the prescribed bowel preparation the day before",
      "Eat a light breakfast 2 hours before the procedure",
      "Avoid all physical activity for 24 hours before the procedure"
    ],
    answer: 1,
    explanation: "Complete bowel preparation (cleansing) is essential for a successful colonoscopy — it allows clear visualization of the colon. Incomplete prep may require the procedure to be rescheduled."
  },
  {
    id: 60,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic renal failure has a hemoglobin of 8 g/dL. The nurse anticipates which medication will be prescribed to address this?",
    choices: [
      "Iron sucrose",
      "Epoetin alfa (Erythropoietin)",
      "Vitamin B12",
      "Folic acid"
    ],
    answer: 1,
    explanation: "Anemia of chronic kidney disease is caused by decreased erythropoietin (EPO) production by the failing kidneys. Epoetin alfa (recombinant EPO) is prescribed to stimulate red blood cell production."
  },

  // ─── MATERNAL & CHILD NURSING (20 questions) ─────────────────────────────
  {
    id: 61,
    subject: "Maternal & Child Nursing",
    question: "A pregnant woman is at 28 weeks gestation. She asks the nurse when she should feel fetal movement (quickening). The nurse's BEST response is:",
    choices: [
      "Quickening is typically felt between 8–12 weeks",
      "Quickening is typically felt between 16–20 weeks",
      "Quickening typically occurs at 28 weeks",
      "Quickening occurs only in the third trimester"
    ],
    answer: 1,
    explanation: "Quickening — the mother's first perception of fetal movement — typically occurs between 16–20 weeks of gestation (earlier in multigravidas at 16 weeks, and primigravidas at around 18–20 weeks)."
  },
  {
    id: 62,
    subject: "Maternal & Child Nursing",
    question: "A laboring patient's cervix is 8 cm dilated. The nurse correctly identifies this as which phase of the first stage of labor?",
    choices: [
      "Latent phase",
      "Active phase",
      "Transition phase",
      "Second stage of labor"
    ],
    answer: 2,
    explanation: "The transition phase of the first stage of labor is characterized by cervical dilation of 8–10 cm. It is the most intense phase of labor, with strong, frequent contractions and significant discomfort."
  },
  {
    id: 63,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a newborn and notes a respiratory rate of 52 breaths per minute, acrocyanosis, and vigorous crying. The nurse's BEST interpretation is:",
    choices: [
      "The newborn requires immediate oxygen supplementation",
      "These are normal findings in a healthy newborn",
      "The newborn is experiencing respiratory distress",
      "Acrocyanosis indicates cardiac defect"
    ],
    answer: 1,
    explanation: "Normal newborn respiratory rate is 30–60 breaths per minute. Acrocyanosis (bluish discoloration of hands and feet) is normal in the first 24–48 hours due to immature peripheral circulation. Vigorous crying indicates good respiratory effort."
  },
  {
    id: 64,
    subject: "Maternal & Child Nursing",
    question: "A patient at 36 weeks gestation presents with painless, bright red vaginal bleeding. The nurse suspects:",
    choices: [
      "Abruptio placentae",
      "Placenta previa",
      "Threatened miscarriage",
      "Normal show of bloody mucus"
    ],
    answer: 1,
    explanation: "Placenta previa presents with painless, bright red vaginal bleeding in the third trimester. Abruptio placentae typically presents with painful, dark red bleeding. The painless nature distinguishes placenta previa."
  },
  {
    id: 65,
    subject: "Maternal & Child Nursing",
    question: "The nurse is preparing to administer erythromycin ointment to a newborn's eyes. The PRIMARY purpose of this intervention is to:",
    choices: [
      "Prevent neonatal conjunctivitis from maternal gonorrhea or chlamydia",
      "Treat viral eye infections acquired during delivery",
      "Improve the newborn's visual acuity",
      "Prevent chemical conjunctivitis from amniotic fluid"
    ],
    answer: 0,
    explanation: "Erythromycin ophthalmic ointment (prophylactic eye treatment) prevents ophthalmia neonatorum — a serious eye infection that can cause blindness — from Neisseria gonorrhoeae or Chlamydia trachomatis acquired during passage through the birth canal."
  },
  {
    id: 66,
    subject: "Maternal & Child Nursing",
    question: "A breastfeeding mother asks about positioning during feeding. Which teaching point is MOST important for preventing sore nipples?",
    choices: [
      "Feed for no longer than 10 minutes per breast",
      "Use a nipple shield during all feedings",
      "Ensure the infant has a wide latch covering most of the areola",
      "Apply cold compresses before each feeding"
    ],
    answer: 2,
    explanation: "Proper latch is the most important factor in preventing sore nipples. The infant should take in most of the areola — not just the nipple — to create an effective seal and prevent trauma to the nipple tissue."
  },
  {
    id: 67,
    subject: "Maternal & Child Nursing",
    question: "A 4-year-old child is admitted with croup. Which clinical finding MOST concerns the nurse?",
    choices: [
      "Barky, seal-like cough",
      "Low-grade fever",
      "Inspiratory stridor at rest",
      "Mild hoarseness"
    ],
    answer: 2,
    explanation: "Inspiratory stridor at rest indicates significant airway obstruction and is a sign of severe croup requiring immediate intervention. Stridor that occurs only with crying or activity is less severe."
  },
  {
    id: 68,
    subject: "Maternal & Child Nursing",
    question: "The nurse is caring for a child with sickle cell disease in vaso-occlusive crisis. Which intervention is the HIGHEST priority?",
    choices: [
      "Administer hydroxyurea",
      "Provide adequate hydration with IV fluids",
      "Apply cold packs to affected extremities",
      "Restrict physical activity"
    ],
    answer: 1,
    explanation: "Adequate hydration is the priority intervention in sickle cell vaso-occlusive crisis. IV fluids help hemodilute the blood, reduce sickling, and restore circulation. Cold packs are contraindicated as cold causes vasoconstriction and worsens sickling."
  },
  {
    id: 69,
    subject: "Maternal & Child Nursing",
    question: "A pregnant patient with pre-eclampsia has a blood pressure of 160/110 mmHg, 3+ proteinuria, and reports a headache. Which medication does the nurse prepare to administer?",
    choices: [
      "Labetalol and magnesium sulfate",
      "Furosemide and digoxin",
      "Oxytocin and nifedipine",
      "Methyldopa and aspirin"
    ],
    answer: 0,
    explanation: "Severe pre-eclampsia is managed with antihypertensives (labetalol or hydralazine) to reduce BP and magnesium sulfate to prevent eclamptic seizures. These are the standard medications in the management of severe pre-eclampsia."
  },
  {
    id: 70,
    subject: "Maternal & Child Nursing",
    question: "A newborn is born with a meningomyelocele. Which nursing intervention is the PRIORITY immediately after birth?",
    choices: [
      "Encourage the mother to hold the newborn for bonding",
      "Cover the sac with a sterile, moist non-adherent dressing",
      "Position the newborn in prone position with legs extended",
      "Assess the sac for leakage and document color"
    ],
    answer: 1,
    explanation: "The immediate priority for meningomyelocele is to cover the sac with a sterile, moist non-adherent dressing to prevent rupture, infection, and CSF leakage while awaiting surgical repair."
  },
  {
    id: 71,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a 6-month-old infant's developmental milestones. Which finding requires further evaluation?",
    choices: [
      "Babbling and vocalizing",
      "Able to sit with support",
      "No head control when pulled to sitting",
      "Turning head toward sounds"
    ],
    answer: 2,
    explanation: "Head control should be fully established by 4 months. A 6-month-old with no head control when pulled to a sitting position (head lag) is a significant developmental red flag requiring further neurological evaluation."
  },
  {
    id: 72,
    subject: "Maternal & Child Nursing",
    question: "A primigravida at 38 weeks asks how to tell if she is in true labor. The nurse explains that true labor is characterized by:",
    choices: [
      "Contractions that stop with walking or position change",
      "Irregular contractions that begin in the abdomen",
      "Regular contractions that increase in frequency, duration, and intensity",
      "Contractions felt mainly in the lower abdomen"
    ],
    answer: 2,
    explanation: "True labor contractions are regular, progressive, and increase in frequency, duration, and intensity over time. They are not relieved by position change or walking, and are felt from the back radiating to the front."
  },
  {
    id: 73,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a postpartum patient 12 hours after delivery. The uterine fundus is palpated above the umbilicus and deviated to the right. The FIRST nursing action should be to:",
    choices: [
      "Massage the uterine fundus vigorously",
      "Assist the patient to empty her bladder",
      "Notify the obstetrician immediately",
      "Increase the IV oxytocin infusion rate"
    ],
    answer: 1,
    explanation: "A uterine fundus above the umbilicus and deviated to the right indicates a full bladder displacing the uterus. The first action is to have the patient urinate — this usually corrects the fundal position and reduces the risk of uterine atony and hemorrhage."
  },
  {
    id: 74,
    subject: "Maternal & Child Nursing",
    question: "A 2-year-old child is diagnosed with Kawasaki disease. Which finding MOST distinguishes Kawasaki disease from other febrile illnesses?",
    choices: [
      "High fever for more than 5 days",
      "Bilateral non-exudative conjunctivitis",
      "Coronary artery aneurysm on echocardiogram",
      "Strawberry tongue"
    ],
    answer: 2,
    explanation: "Coronary artery aneurysm is the hallmark complication of Kawasaki disease that distinguishes it from other febrile conditions. It develops in approximately 25% of untreated children and is the primary reason for treatment with IVIG and aspirin."
  },
  {
    id: 75,
    subject: "Maternal & Child Nursing",
    question: "The nurse is preparing to administer vitamin K to a newborn. The CORRECT route is:",
    choices: [
      "Oral",
      "Subcutaneous",
      "Intramuscular into the vastus lateralis",
      "Intravenous"
    ],
    answer: 2,
    explanation: "Vitamin K1 (phytonadione) is given IM into the vastus lateralis muscle of the newborn's thigh to prevent hemorrhagic disease of the newborn (vitamin K deficiency bleeding), as newborns are born with low vitamin K stores."
  },
  {
    id: 76,
    subject: "Maternal & Child Nursing",
    question: "A pregnant woman is in her first trimester. The nurse teaches her which dietary supplement is MOST important to prevent neural tube defects?",
    choices: [
      "Iron",
      "Calcium",
      "Folic acid",
      "Vitamin D"
    ],
    answer: 2,
    explanation: "Folic acid (400–800 mcg/day) taken before conception and during the first trimester significantly reduces the risk of neural tube defects (anencephaly, spina bifida) in the developing fetus."
  },
  {
    id: 77,
    subject: "Maternal & Child Nursing",
    question: "A child with epiglottitis is brought to the emergency department. The nurse's PRIORITY intervention is to:",
    choices: [
      "Obtain a throat culture to identify the causative organism",
      "Prepare for immediate airway management",
      "Start IV antibiotics immediately",
      "Encourage oral fluid intake to prevent dehydration"
    ],
    answer: 1,
    explanation: "Epiglottitis is a life-threatening emergency. The priority is airway management — the airway can completely obstruct rapidly. No procedures that may agitate the child (including throat examination) should be done until the airway is secured."
  },
  {
    id: 78,
    subject: "Maternal & Child Nursing",
    question: "The nurse is assessing a newborn's Moro reflex. Which response indicates a NORMAL Moro reflex?",
    choices: [
      "Flexion of all limbs toward the midline",
      "Extension and abduction of arms followed by flexion and adduction",
      "Asymmetric arm movement with one side extending only",
      "No response when the infant is startled"
    ],
    answer: 1,
    explanation: "A normal Moro reflex (startle reflex) involves symmetric extension and abduction of both arms (opening of hands) followed by flexion and adduction (embracing motion). Asymmetric response may indicate brachial plexus injury or clavicle fracture."
  },
  {
    id: 79,
    subject: "Maternal & Child Nursing",
    question: "A postpartum patient is breastfeeding. She reports breast engorgement on the third postpartum day. The nurse's BEST advice is to:",
    choices: [
      "Apply cold compresses and reduce breastfeeding frequency",
      "Feed frequently and ensure complete emptying of the breast",
      "Pump and discard breast milk until engorgement resolves",
      "Apply tight breast binding to reduce milk production"
    ],
    answer: 1,
    explanation: "The most effective management of breast engorgement is frequent breastfeeding (8–12 times per day) and ensuring the breast is adequately emptied at each feeding. Applying warm compresses before feeding can help with milk let-down."
  },
  {
    id: 80,
    subject: "Maternal & Child Nursing",
    question: "The nurse is caring for a child with nephrotic syndrome. Which assessment finding is MOST expected in this condition?",
    choices: [
      "Hematuria and hypertension",
      "Massive proteinuria and generalized edema",
      "Oliguria and elevated creatinine",
      "Pyuria and positive urine culture"
    ],
    answer: 1,
    explanation: "Nephrotic syndrome is characterized by massive proteinuria (protein loss in urine), hypoalbuminemia, generalized edema (anasarca), and hyperlipidemia. Hematuria and hypertension are more characteristic of nephritic syndrome."
  },

  // ─── PSYCHIATRIC NURSING (20 questions) ──────────────────────────────────
  {
    id: 81,
    subject: "Psychiatric Nursing",
    question: "A patient with major depressive disorder states, 'Life is not worth living anymore.' The nurse's PRIORITY action is to:",
    choices: [
      "Encourage the patient to think positive thoughts",
      "Directly ask the patient about suicidal ideation",
      "Document the statement and monitor the patient",
      "Distract the patient with recreational activities"
    ],
    answer: 1,
    explanation: "When a patient makes a statement suggesting suicidal thoughts, directly asking about suicidal ideation is the priority. Research shows that asking about suicide does not plant the idea but actually opens therapeutic communication and enables appropriate intervention."
  },
  {
    id: 82,
    subject: "Psychiatric Nursing",
    question: "A patient with schizophrenia tells the nurse, 'The television is sending me special messages.' The nurse correctly identifies this as:",
    choices: [
      "Hallucination",
      "Illusion",
      "Idea of reference",
      "Thought broadcasting"
    ],
    answer: 2,
    explanation: "An idea of reference is a type of delusion where the patient believes that external events (such as TV broadcasts) have special personal significance directed specifically at them. It is a common positive symptom of schizophrenia."
  },
  {
    id: 83,
    subject: "Psychiatric Nursing",
    question: "The nurse is using therapeutic communication with a patient. Which response is an example of an open-ended question?",
    choices: [
      "'Are you feeling anxious today?'",
      "'Did you sleep well last night?'",
      "'Tell me what's been on your mind lately.'",
      "'You seem upset. Are you angry?'"
    ],
    answer: 2,
    explanation: "An open-ended question invites the patient to explore and share their thoughts freely. 'Tell me what's been on your mind lately' allows the patient to respond in any direction, unlike closed questions that limit responses to yes/no answers."
  },
  {
    id: 84,
    subject: "Psychiatric Nursing",
    question: "A patient with bipolar disorder in a manic episode is hyperactive, not eating, and sleeping only 2 hours per night. The nurse's PRIORITY intervention is to:",
    choices: [
      "Encourage group therapy participation",
      "Provide a calm, structured environment and ensure nutrition and rest",
      "Challenge the patient's grandiose beliefs",
      "Allow the patient to expend energy freely"
    ],
    answer: 1,
    explanation: "During mania, patients are at risk for physical exhaustion, dehydration, and malnutrition due to their hyperactivity and decreased self-care. The priority is maintaining physical safety by providing structured activities, high-calorie finger foods, and rest periods."
  },
  {
    id: 85,
    subject: "Psychiatric Nursing",
    question: "A patient is taking lithium for bipolar disorder. The nurse monitors for early signs of lithium toxicity, which include:",
    choices: [
      "Hypertension and bradycardia",
      "Fine hand tremors, polyuria, and nausea",
      "Elevated mood and increased energy",
      "Coarse tremors, confusion, and seizures"
    ],
    answer: 1,
    explanation: "Early signs of lithium toxicity (serum level 1.5–2.0 mEq/L) include fine hand tremors, polyuria, mild nausea, and vomiting. Coarse tremors, confusion, and seizures indicate severe toxicity. Therapeutic lithium range is 0.6–1.2 mEq/L."
  },
  {
    id: 86,
    subject: "Psychiatric Nursing",
    question: "A patient with generalized anxiety disorder (GAD) is hyperventilating. The nurse's FIRST intervention should be to:",
    choices: [
      "Administer lorazepam immediately",
      "Leave the patient alone to avoid worsening anxiety",
      "Stay with the patient and calmly guide slow, diaphragmatic breathing",
      "Apply oxygen via non-rebreather mask"
    ],
    answer: 2,
    explanation: "The first intervention for hyperventilation in anxiety is to stay with the patient (therapeutic presence) and guide slow, controlled diaphragmatic breathing to reduce respiratory alkalosis and anxiety. Medication is considered if non-pharmacological measures are insufficient."
  },
  {
    id: 87,
    subject: "Psychiatric Nursing",
    question: "A patient with anorexia nervosa has a BMI of 16. Which assessment finding requires IMMEDIATE medical attention?",
    choices: [
      "Reports feeling 'fat' despite being underweight",
      "Serum potassium of 2.8 mEq/L with irregular pulse",
      "Amenorrhea for the past 3 months",
      "Excessive exercise routine of 2 hours daily"
    ],
    answer: 1,
    explanation: "Severe hypokalemia (K+ 2.8 mEq/L) with irregular pulse indicates potentially life-threatening cardiac dysrhythmia — the most common cause of death in anorexia nervosa. This requires immediate medical intervention."
  },
  {
    id: 88,
    subject: "Psychiatric Nursing",
    question: "Which communication technique is MOST therapeutic when a patient makes a delusional statement?",
    choices: [
      "Agree with the delusion to establish rapport",
      "Argue and present facts to correct the delusion",
      "Acknowledge the patient's feelings without reinforcing or arguing the delusion",
      "Ignore the statement and redirect to another topic"
    ],
    answer: 2,
    explanation: "The therapeutic approach to delusions is to neither agree nor argue, but to acknowledge the patient's feelings ('I understand you feel frightened') while not reinforcing the content of the delusion. Arguing increases defensiveness; agreeing reinforces pathological thinking."
  },
  {
    id: 89,
    subject: "Psychiatric Nursing",
    question: "A patient receiving haloperidol develops sudden muscle rigidity, hyperthermia, and autonomic instability. The nurse suspects:",
    choices: [
      "Tardive dyskinesia",
      "Akathisia",
      "Neuroleptic malignant syndrome (NMS)",
      "Acute dystonia"
    ],
    answer: 2,
    explanation: "Neuroleptic Malignant Syndrome (NMS) is a rare but life-threatening reaction to antipsychotic medications, characterized by hyperthermia, severe muscle rigidity, altered consciousness, and autonomic instability. It requires immediate discontinuation of the medication and emergency care."
  },
  {
    id: 90,
    subject: "Psychiatric Nursing",
    question: "When using motivational interviewing with a patient who abuses alcohol, the nurse demonstrates this approach by:",
    choices: [
      "Telling the patient the consequences of continued alcohol use",
      "Asking the patient to explain the reasons they want to change",
      "Confronting the patient about their denial",
      "Setting strict rules about the patient's alcohol intake"
    ],
    answer: 1,
    explanation: "Motivational interviewing is a patient-centered approach that elicits the patient's own reasons and motivation for change. Asking open-ended questions about their desire to change empowers the patient rather than confronting or lecturing."
  },
  {
    id: 91,
    subject: "Psychiatric Nursing",
    question: "The nurse is applying physical restraints to an agitated patient as a last resort. Which action is MOST important?",
    choices: [
      "Restrain all four limbs tightly for maximum safety",
      "Explain the reason for restraint to the patient before applying",
      "Apply restraints without explanation to avoid worsening agitation",
      "Assess restrained extremities every 4 hours"
    ],
    answer: 1,
    explanation: "Before applying restraints, the nurse must explain the reason for the restraint to the patient. This is an ethical and legal requirement. Restrained extremities must be assessed every 15–30 minutes (not 4 hours) for circulation, sensation, and movement."
  },
  {
    id: 92,
    subject: "Psychiatric Nursing",
    question: "A patient with obsessive-compulsive disorder (OCD) performs hand-washing rituals for 3 hours daily. The nurse's BEST approach is to:",
    choices: [
      "Strictly prevent all hand-washing rituals",
      "Allow the rituals while gradually working to reduce their frequency",
      "Ignore the behavior to avoid reinforcing it",
      "Encourage the patient to explain why they wash their hands"
    ],
    answer: 1,
    explanation: "Abruptly stopping compulsive rituals causes extreme anxiety. The therapeutic approach is to allow rituals initially while collaborating with the patient to gradually reduce their frequency and duration, often through Exposure and Response Prevention (ERP) therapy."
  },
  {
    id: 93,
    subject: "Psychiatric Nursing",
    question: "A patient with post-traumatic stress disorder (PTSD) is experiencing a flashback in the hospital. The nurse's FIRST action should be to:",
    choices: [
      "Leave the patient alone to avoid overwhelming them",
      "Restrain the patient to prevent injury",
      "Speak calmly, orient the patient to present reality, and ensure safety",
      "Administer a sedative immediately"
    ],
    answer: 2,
    explanation: "During a flashback, the priority is to keep the patient safe and oriented to present reality. Speaking calmly, using the patient's name, and orienting them to their current environment (grounding techniques) are first-line interventions."
  },
  {
    id: 94,
    subject: "Psychiatric Nursing",
    question: "The nurse is planning discharge teaching for a patient prescribed sertraline (an SSRI). Which instruction is MOST important?",
    choices: [
      "Expect full therapeutic effects within 24–48 hours",
      "Stop the medication immediately if side effects occur",
      "Take the medication consistently and do not stop abruptly",
      "Avoid all dairy products while taking the medication"
    ],
    answer: 2,
    explanation: "SSRIs should not be stopped abruptly, as this causes SSRI discontinuation syndrome (dizziness, flu-like symptoms, anxiety). It takes 2–6 weeks for full therapeutic effect. Patients should be taught to taper the medication under physician guidance if discontinuing."
  },
  {
    id: 95,
    subject: "Psychiatric Nursing",
    question: "In the nurse-patient therapeutic relationship, which phase involves terminating the relationship and evaluating goal achievement?",
    choices: [
      "Pre-interaction phase",
      "Orientation phase",
      "Working phase",
      "Termination phase"
    ],
    answer: 3,
    explanation: "The termination phase is the final phase of the therapeutic nurse-patient relationship. It involves reviewing progress toward goals, addressing separation feelings, and reinforcing the patient's independence and coping skills."
  },
  {
    id: 96,
    subject: "Psychiatric Nursing",
    question: "A nurse on a psychiatric unit notices a colleague administering a patient's medications without documentation. The nurse's FIRST action should be to:",
    choices: [
      "Report the colleague directly to the nursing board",
      "Ignore the incident to avoid conflict",
      "Approach the colleague privately and address the concern",
      "Write an incident report immediately without speaking to the colleague"
    ],
    answer: 2,
    explanation: "The first action in a collegial concern is to address it directly and privately with the colleague — following the principle of non-maleficence and professional accountability. If the behavior continues or is unsafe, formal reporting through proper channels is required."
  },
  {
    id: 97,
    subject: "Psychiatric Nursing",
    question: "A patient with borderline personality disorder says to the nurse, 'You're the only one who understands me. The other nurses are terrible.' This is an example of:",
    choices: [
      "Transference",
      "Countertransference",
      "Splitting",
      "Projection"
    ],
    answer: 2,
    explanation: "Splitting is a primitive defense mechanism common in borderline personality disorder where individuals view people or situations as all good or all bad. Alternating between idealization and devaluation of caregivers is a characteristic presentation."
  },
  {
    id: 98,
    subject: "Psychiatric Nursing",
    question: "A patient is admitted for alcohol withdrawal. Which medication does the nurse anticipate will be prescribed to prevent seizures?",
    choices: [
      "Haloperidol",
      "Diazepam (benzodiazepine)",
      "Lithium carbonate",
      "Fluoxetine"
    ],
    answer: 1,
    explanation: "Benzodiazepines (diazepam, lorazepam, chlordiazepoxide) are the standard treatment for alcohol withdrawal to prevent seizures and delirium tremens. They work by depressing the CNS and are cross-tolerant with alcohol."
  },
  {
    id: 99,
    subject: "Psychiatric Nursing",
    question: "The nurse is assessing a patient for suicide risk. Which factor indicates the HIGHEST risk?",
    choices: [
      "Having passive thoughts of death without a plan",
      "A specific, lethal plan with access to the means",
      "Expressing sadness and crying during the interview",
      "History of a single episode of depression"
    ],
    answer: 1,
    explanation: "Having a specific, lethal suicide plan with access to the means (e.g., a loaded gun) represents the highest level of suicide risk and requires immediate safety intervention. A plan with means and intent dramatically increases the risk of a completed suicide attempt."
  },
  {
    id: 100,
    subject: "Psychiatric Nursing",
    question: "Which statement BEST describes the ethical principle of 'beneficence' in psychiatric nursing?",
    choices: [
      "Respecting the patient's right to make their own decisions",
      "Treating all patients equally and fairly",
      "Acting in the patient's best interest and promoting their well-being",
      "Avoiding actions that cause harm to the patient"
    ],
    answer: 2,
    explanation: "Beneficence means acting in the best interest of the patient and promoting their well-being. Non-maleficence means avoiding harm; autonomy means respecting decisions; justice means fairness and equal treatment."
  },  // ─── MEDICAL-SURGICAL NURSING — 100 ADDITIONAL QUESTIONS ───────────────
// ─── MEDICAL-SURGICAL NURSING (100 questions) ─────────────────────────────

  {
    id: 1,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic kidney disease has a serum potassium of 6.2 mEq/L. Which ECG change does the nurse anticipate?",
    choices: ["Prolonged PR interval", "Peaked T waves", "U waves", "ST depression"],
    answer: 1,
    explanation: "Hyperkalemia (K+ >5.0 mEq/L) causes peaked (tall, narrow) T waves on ECG. As levels rise further, the PR interval widens, QRS widens, and eventually ventricular fibrillation can occur."
  },
  {
    id: 2,
    subject: "Medical-Surgical Nursing",
    question: "A patient is admitted with diabetic ketoacidosis (DKA). Which breathing pattern does the nurse expect to assess?",
    choices: ["Cheyne-Stokes respirations", "Biot respirations", "Kussmaul respirations", "Apneustic respirations"],
    answer: 2,
    explanation: "Kussmaul respirations are deep, rapid, labored breaths that occur as a compensatory mechanism in DKA. The body attempts to blow off excess CO2 to correct metabolic acidosis."
  },
  {
    id: 3,
    subject: "Medical-Surgical Nursing",
    question: "A nurse is caring for a patient post-thyroidectomy. Which finding requires IMMEDIATE intervention?",
    choices: ["Hoarse voice", "Mild sore throat", "Positive Chvostek sign", "Serosanguineous drainage on dressing"],
    answer: 2,
    explanation: "A positive Chvostek sign (facial twitching when the cheek is tapped) indicates hypocalcemia, which can occur after thyroidectomy due to accidental removal of the parathyroid glands. This can lead to tetany and laryngospasm — a medical emergency."
  },
  {
    id: 4,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a pulmonary embolism is started on heparin. Which lab value does the nurse monitor to assess therapeutic effect?",
    choices: ["PT/INR", "aPTT", "Platelet count", "Hemoglobin"],
    answer: 1,
    explanation: "Heparin therapy is monitored using aPTT (activated partial thromboplastin time). Therapeutic range is 1.5–2.5 times the control value (approximately 60–100 seconds). PT/INR monitors warfarin therapy."
  },
  {
    id: 5,
    subject: "Medical-Surgical Nursing",
    question: "A patient develops chest pain, diaphoresis, and ST elevation in leads II, III, and aVF. The nurse recognizes this as:",
    choices: ["Anterior MI", "Lateral MI", "Inferior MI", "Posterior MI"],
    answer: 2,
    explanation: "ST elevation in leads II, III, and aVF indicates an inferior MI, typically involving the right coronary artery. Anterior MI shows changes in V1-V4; lateral MI in I, aVL, V5-V6."
  },
  {
    id: 6,
    subject: "Medical-Surgical Nursing",
    question: "A patient with cirrhosis develops confusion and asterixis. The nurse recognizes this as a sign of:",
    choices: ["Hypoglycemia", "Hepatic encephalopathy", "Wernicke encephalopathy", "Subdural hematoma"],
    answer: 1,
    explanation: "Asterixis (liver flap — flapping tremor of the hands) combined with confusion is a classic sign of hepatic encephalopathy. It results from elevated ammonia levels due to the liver's inability to detoxify ammonia."
  },
  {
    id: 7,
    subject: "Medical-Surgical Nursing",
    question: "A patient is ordered NPH insulin at 8 AM. The nurse knows the peak action occurs at approximately:",
    choices: ["1–2 hours", "2–4 hours", "4–12 hours", "14–18 hours"],
    answer: 2,
    explanation: "NPH (intermediate-acting) insulin peaks at 4–12 hours after administration. Onset is 1–2 hours; duration is 18–24 hours. The nurse should monitor for hypoglycemia during the peak period."
  },
  {
    id: 8,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-gastrectomy develops sweating, palpitations, and dizziness 30 minutes after eating. The nurse recognizes this as:",
    choices: ["Peptic ulcer recurrence", "Dumping syndrome", "Paralytic ileus", "Anastomotic leak"],
    answer: 1,
    explanation: "Dumping syndrome occurs after gastrectomy when gastric contents empty too rapidly into the small intestine. Early dumping (10–30 minutes post-meal) causes vasomotor symptoms: diaphoresis, tachycardia, dizziness, and abdominal cramping."
  },
  {
    id: 9,
    subject: "Medical-Surgical Nursing",
    question: "A patient with COPD has ABG results: pH 7.32, PaCO2 58, HCO3 28. The nurse interprets this as:",
    choices: ["Respiratory alkalosis, uncompensated", "Metabolic acidosis, compensated", "Respiratory acidosis, compensated", "Metabolic alkalosis, uncompensated"],
    answer: 2,
    explanation: "pH 7.32 (acidic) + elevated PaCO2 (58) = respiratory acidosis. Elevated HCO3 (28) indicates renal compensation. Since pH is not normal yet, it is partially compensated respiratory acidosis."
  },
  {
    id: 10,
    subject: "Medical-Surgical Nursing",
    question: "A patient with deep vein thrombosis is on bed rest. Which nursing intervention is the PRIORITY?",
    choices: ["Apply compression stockings", "Massage the affected leg", "Elevate the affected extremity", "Encourage ambulation immediately"],
    answer: 2,
    explanation: "Elevating the affected extremity promotes venous return and reduces edema. Massaging the affected leg is contraindicated as it can dislodge the thrombus and cause pulmonary embolism."
  },
  {
    id: 11,
    subject: "Medical-Surgical Nursing",
    question: "A patient with Addison's disease is in crisis. Which IV fluid does the nurse anticipate administering?",
    choices: ["D5W", "0.45% NaCl", "0.9% NaCl with dextrose", "Lactated Ringer's"],
    answer: 2,
    explanation: "Addisonian crisis involves severe hyponatremia, hypoglycemia, and hypotension. Treatment includes IV 0.9% NaCl with dextrose to correct fluid deficit, hyponatremia, and hypoglycemia, along with IV hydrocortisone."
  },
  {
    id: 12,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a spinal cord injury at T6 suddenly develops severe hypertension, bradycardia, and profuse sweating above the injury level. The nurse recognizes this as:",
    choices: ["Neurogenic shock", "Spinal shock", "Autonomic dysreflexia", "Orthostatic hypotension"],
    answer: 2,
    explanation: "Autonomic dysreflexia is a life-threatening emergency in patients with spinal cord injuries at T6 or above. It is triggered by a noxious stimulus below the injury level (commonly full bladder or bowel). The first action is to sit the patient upright and identify/remove the trigger."
  },
  {
    id: 13,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-hip replacement is being discharged. Which instruction is MOST important to prevent dislocation?",
    choices: ["Sleep on the operative side", "Avoid crossing legs", "Bend the hip more than 90 degrees when sitting", "Keep feet close together when walking"],
    answer: 1,
    explanation: "After hip replacement, the patient must avoid adduction (crossing legs), flexion >90 degrees, and internal rotation to prevent dislocation. These are the hip precautions."
  },
  {
    id: 14,
    subject: "Medical-Surgical Nursing",
    question: "A patient with pancreatitis has severe abdominal pain. Which position BEST relieves the pain?",
    choices: ["Supine with legs extended", "Prone position", "Knee-chest (fetal) position", "High Fowler's position"],
    answer: 2,
    explanation: "The knee-chest (fetal) position — knees drawn to chest while side-lying — reduces tension on the inflamed pancreas and relieves pain by decreasing stretching of the peritoneum."
  },
  {
    id: 15,
    subject: "Medical-Surgical Nursing",
    question: "A patient is receiving a blood transfusion and develops flank pain, hematuria, and fever within 15 minutes. The nurse's FIRST action is to:",
    choices: ["Slow the transfusion rate", "Administer antipyretics", "Stop the transfusion immediately", "Notify the physician"],
    answer: 2,
    explanation: "These symptoms indicate an acute hemolytic transfusion reaction — the most dangerous type. The nurse must STOP the transfusion immediately, maintain IV access with normal saline, and notify the blood bank and physician. Continuing even slow infusion can be fatal."
  },
  {
    id: 16,
    subject: "Medical-Surgical Nursing",
    question: "A patient with hypothyroidism is prescribed levothyroxine. Which instruction does the nurse include?",
    choices: ["Take with food to prevent GI upset", "Take at bedtime for best absorption", "Take on an empty stomach 30–60 minutes before breakfast", "Take with milk or antacids"],
    answer: 2,
    explanation: "Levothyroxine should be taken on an empty stomach 30–60 minutes before breakfast for optimal absorption. Food, milk, calcium, and antacids interfere with absorption."
  },
  {
    id: 17,
    subject: "Medical-Surgical Nursing",
    question: "A patient develops tracheal deviation to the unaffected side, absent breath sounds, and hypotension after chest trauma. The nurse suspects:",
    choices: ["Hemothorax", "Pneumonia", "Tension pneumothorax", "Pulmonary contusion"],
    answer: 2,
    explanation: "Tension pneumothorax causes tracheal deviation AWAY from the affected side, absent breath sounds on the affected side, hypotension, and distended neck veins. It is a life-threatening emergency requiring immediate needle decompression."
  },
  {
    id: 18,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic renal failure has a hemoglobin of 8 g/dL. The nurse understands the MOST likely cause is:",
    choices: ["Iron deficiency", "Vitamin B12 deficiency", "Decreased erythropoietin production", "Bone marrow suppression"],
    answer: 2,
    explanation: "The kidneys produce erythropoietin, which stimulates red blood cell production. In chronic renal failure, decreased erythropoietin leads to normocytic, normochromic anemia. Treatment includes erythropoiesis-stimulating agents (epoetin alfa)."
  },
  {
    id: 19,
    subject: "Medical-Surgical Nursing",
    question: "A patient with peptic ulcer disease tests positive for H. pylori. The nurse anticipates which treatment regimen?",
    choices: ["Single antibiotic + PPI", "Triple therapy: two antibiotics + PPI", "Antacids alone", "H2 blockers + antacids"],
    answer: 1,
    explanation: "Standard H. pylori treatment is triple therapy: two antibiotics (clarithromycin + amoxicillin or metronidazole) plus a proton pump inhibitor (PPI) for 10–14 days. This achieves eradication rates of 70–85%."
  },
  {
    id: 20,
    subject: "Medical-Surgical Nursing",
    question: "A patient is diagnosed with syndrome of inappropriate antidiuretic hormone (SIADH). Which laboratory finding does the nurse expect?",
    choices: ["Elevated serum sodium", "Decreased urine osmolality", "Decreased serum sodium", "Elevated serum osmolality"],
    answer: 2,
    explanation: "SIADH causes excessive water retention, leading to dilutional hyponatremia (low serum sodium <135 mEq/L) and concentrated urine (elevated urine osmolality). Serum osmolality is also decreased."
  },
  {
    id: 21,
    subject: "Medical-Surgical Nursing",
    question: "A patient with heart failure is prescribed furosemide. Which electrolyte does the nurse monitor most closely?",
    choices: ["Sodium", "Calcium", "Potassium", "Phosphorus"],
    answer: 2,
    explanation: "Furosemide is a loop diuretic that causes significant potassium loss, leading to hypokalemia. The nurse monitors serum potassium and may supplement potassium as ordered. Hypokalemia increases digoxin toxicity risk."
  },
  {
    id: 22,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a stroke has right-sided hemiplegia and aphasia. The affected hemisphere is the:",
    choices: ["Right hemisphere", "Left hemisphere", "Cerebellum", "Brain stem"],
    answer: 1,
    explanation: "The left hemisphere controls language (Broca's and Wernicke's areas) and motor function for the right side of the body. A left hemisphere stroke causes right-sided hemiplegia and aphasia."
  },
  {
    id: 23,
    subject: "Medical-Surgical Nursing",
    question: "A patient develops sudden onset severe headache described as 'the worst headache of my life.' The nurse's priority assessment is:",
    choices: ["Blood pressure", "Pupillary response", "Level of consciousness", "Onset and characteristics of the headache"],
    answer: 2,
    explanation: "A sudden severe 'thunderclap' headache is a classic sign of subarachnoid hemorrhage. While all assessments are important, level of consciousness is the priority as it indicates neurological status and urgency."
  },
  {
    id: 24,
    subject: "Medical-Surgical Nursing",
    question: "A patient with asthma has an acute attack. Which medication does the nurse administer FIRST?",
    choices: ["Inhaled corticosteroid (fluticasone)", "Long-acting beta-agonist (salmeterol)", "Short-acting beta-agonist (albuterol)", "Leukotriene modifier (montelukast)"],
    answer: 2,
    explanation: "Short-acting beta-agonists (SABAs) like albuterol are the first-line rescue medication for acute asthma attacks. They cause rapid bronchodilation within minutes. Inhaled corticosteroids are for maintenance, not acute relief."
  },
  {
    id: 25,
    subject: "Medical-Surgical Nursing",
    question: "A patient with Cushing's syndrome is most at risk for which complication?",
    choices: ["Hypoglycemia", "Hypotension", "Osteoporosis", "Bradycardia"],
    answer: 2,
    explanation: "Cushing's syndrome results from excess cortisol. Chronic excess cortisol inhibits osteoblast activity and increases bone resorption, leading to osteoporosis and increased fracture risk. Other complications include hyperglycemia and hypertension."
  },
  {
    id: 26,
    subject: "Medical-Surgical Nursing",
    question: "A patient with cirrhosis develops sudden onset of bright red blood in vomit. The nurse's FIRST intervention is:",
    choices: ["Insert a nasogastric tube", "Administer vasopressin IV", "Establish IV access and give fluids", "Prepare for endoscopy"],
    answer: 2,
    explanation: "The priority in acute upper GI bleeding (likely esophageal varices) is establishing IV access and restoring circulating volume to prevent hypovolemic shock. Airway and circulation (ABC) must be addressed first."
  },
  {
    id: 27,
    subject: "Medical-Surgical Nursing",
    question: "A patient is in the oliguric phase of acute kidney injury (AKI). Which dietary modification is MOST important?",
    choices: ["High protein diet", "Increased potassium intake", "Restrict fluid, protein, potassium, and sodium", "Increase phosphorus intake"],
    answer: 2,
    explanation: "During the oliguric phase of AKI, the kidneys cannot excrete waste products or regulate electrolytes. Diet must restrict: fluid (to prevent fluid overload), protein (to reduce BUN), potassium (to prevent hyperkalemia), sodium (to prevent hypertension/edema), and phosphorus."
  },
  {
    id: 28,
    subject: "Medical-Surgical Nursing",
    question: "A patient with hyperthyroidism is preparing for thyroidectomy. Which medication is given pre-operatively to reduce vascularity of the gland?",
    choices: ["Methimazole", "Propranolol", "Lugol's iodine solution", "Levothyroxine"],
    answer: 2,
    explanation: "Lugol's iodine solution (potassium iodide) is given 10–14 days before thyroidectomy to reduce the vascularity and size of the thyroid gland, decreasing the risk of intraoperative hemorrhage. Methimazole reduces thyroid hormone synthesis."
  },
  {
    id: 29,
    subject: "Medical-Surgical Nursing",
    question: "A patient with Parkinson's disease is prescribed levodopa-carbidopa. The nurse teaches the patient to avoid which food?",
    choices: ["Dairy products", "High-protein foods", "High-fat foods", "High-carbohydrate foods"],
    answer: 1,
    explanation: "High-protein foods compete with levodopa for absorption in the GI tract and at the blood-brain barrier, reducing drug effectiveness. Patients should take levodopa 30–60 minutes before meals and limit protein intake during the day."
  },
  {
    id: 30,
    subject: "Medical-Surgical Nursing",
    question: "A patient with left-sided heart failure is most likely to exhibit which symptom?",
    choices: ["Peripheral edema", "Ascites", "Pulmonary congestion and dyspnea", "Jugular vein distension"],
    answer: 2,
    explanation: "Left-sided heart failure causes backup of blood into the pulmonary circulation, leading to pulmonary congestion, dyspnea, orthopnea, and crackles. Right-sided failure causes systemic symptoms: peripheral edema, JVD, and ascites."
  },
  {
    id: 31,
    subject: "Medical-Surgical Nursing",
    question: "A patient is diagnosed with type 2 diabetes. Which HbA1c value indicates good long-term glucose control?",
    choices: ["Less than 5%", "Less than 7%", "7–9%", "Greater than 9%"],
    answer: 1,
    explanation: "The American Diabetes Association target HbA1c for most non-pregnant adults with diabetes is less than 7%. HbA1c reflects average blood glucose over the past 2–3 months. Values above 7% indicate poor control."
  },
  {
    id: 32,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a fractured femur develops sudden chest pain, dyspnea, and petechiae on the chest and axillae 24–48 hours after injury. The nurse suspects:",
    choices: ["Pulmonary embolism", "Fat embolism syndrome", "Pneumothorax", "Acute MI"],
    answer: 1,
    explanation: "Fat embolism syndrome occurs 24–72 hours after long bone fractures. Classic triad: respiratory distress, neurological changes, and petechial rash on the chest, axillae, and neck. It is caused by fat globules entering the circulation."
  },
  {
    id: 33,
    subject: "Medical-Surgical Nursing",
    question: "A patient with myasthenia gravis is in crisis. Which finding distinguishes myasthenic crisis from cholinergic crisis?",
    choices: ["Muscle weakness", "Ptosis", "Improvement with edrophonium (Tensilon) test", "Bradycardia"],
    answer: 2,
    explanation: "The Tensilon (edrophonium) test helps distinguish the two crises: myasthenic crisis shows IMPROVEMENT with Tensilon; cholinergic crisis shows WORSENING. Both present with weakness, but cholinergic crisis is caused by too much anticholinesterase medication."
  },
  {
    id: 34,
    subject: "Medical-Surgical Nursing",
    question: "A patient is started on warfarin (Coumadin). Which statement indicates the patient needs further teaching?",
    choices: ["I will get my INR checked regularly", "I will avoid green leafy vegetables completely", "I will inform my dentist I am on warfarin", "I will avoid aspirin unless prescribed"],
    answer: 1,
    explanation: "Patients on warfarin should MAINTAIN a consistent intake of vitamin K-rich foods (like green leafy vegetables), not eliminate them. Sudden changes in vitamin K intake affect INR control. Complete avoidance is not recommended."
  },
  {
    id: 35,
    subject: "Medical-Surgical Nursing",
    question: "A patient with burns over 40% of total body surface area (TBSA) is in the emergent phase. The nurse's priority is:",
    choices: ["Pain management", "Wound debridement", "Fluid resuscitation", "Nutritional support"],
    answer: 2,
    explanation: "During the emergent/resuscitative phase (0–48 hours), massive fluid shifts occur due to increased capillary permeability. Fluid resuscitation (Parkland formula) is the priority to prevent hypovolemic shock and maintain organ perfusion."
  },
  {
    id: 36,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic obstructive pulmonary disease (COPD) is receiving oxygen therapy. The nurse maintains the oxygen flow rate at:",
    choices: ["6–8 L/min via simple mask", "10–12 L/min via non-rebreather", "1–2 L/min via nasal cannula", "5 L/min via Venturi mask"],
    answer: 2,
    explanation: "COPD patients rely on hypoxic drive to breathe. High-flow oxygen can suppress this drive, causing respiratory depression. Low-flow oxygen (1–3 L/min via nasal cannula) maintains SpO2 at 88–92% — the target for COPD patients."
  },
  {
    id: 37,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-mastectomy asks why she should not have blood drawn from her affected arm. The nurse's BEST response is:",
    choices: ["The arm is too painful for venipuncture", "It could introduce infection into the surgical site", "It can worsen lymphedema due to disrupted lymph nodes", "The veins are too fragile after surgery"],
    answer: 2,
    explanation: "Axillary lymph node dissection during mastectomy disrupts lymphatic drainage. Blood draws, blood pressure measurements, and IV insertions on the affected arm increase the risk of lymphedema — chronic painful swelling from lymph accumulation."
  },
  {
    id: 38,
    subject: "Medical-Surgical Nursing",
    question: "A patient with acute respiratory distress syndrome (ARDS) is on mechanical ventilation. Which ventilator setting is priority to prevent ventilator-induced lung injury?",
    choices: ["High tidal volume (12–15 mL/kg)", "Low tidal volume (6 mL/kg)", "High PEEP (20 cmH2O)", "FiO2 of 100% continuously"],
    answer: 1,
    explanation: "Lung-protective ventilation strategy for ARDS uses low tidal volumes (6 mL/kg of ideal body weight) to prevent barotrauma and volutrauma. High tidal volumes cause overdistension of alveoli and worsen lung injury."
  },
  {
    id: 39,
    subject: "Medical-Surgical Nursing",
    question: "A patient with gout has a serum uric acid of 9.8 mg/dL. Which dietary change does the nurse recommend?",
    choices: ["Increase organ meats and shellfish", "Increase fluid intake and reduce purine-rich foods", "Increase dairy intake", "Reduce fluid intake to decrease urine output"],
    answer: 1,
    explanation: "Gout is caused by hyperuricemia and urate crystal deposition in joints. Management includes increasing fluid intake (2–3 L/day to promote uric acid excretion), avoiding purine-rich foods (organ meats, shellfish, red meat, alcohol)."
  },
  {
    id: 40,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a closed head injury has a Glasgow Coma Scale (GCS) score of 7. The nurse classifies this as:",
    choices: ["Mild TBI (GCS 13–15)", "Moderate TBI (GCS 9–12)", "Severe TBI (GCS 3–8)", "Brain death (GCS 1–2)"],
    answer: 2,
    explanation: "GCS scores classify TBI severity: Mild = 13–15, Moderate = 9–12, Severe = 3–8. A GCS of 7 indicates severe TBI, requiring intensive monitoring and potential intubation for airway protection."
  },
  {
    id: 41,
    subject: "Medical-Surgical Nursing",
    question: "A patient with rheumatoid arthritis reports morning stiffness lasting over an hour. The nurse teaches the patient to:",
    choices: ["Avoid all physical activity in the morning", "Apply ice packs to affected joints upon waking", "Take a warm shower or bath in the morning", "Stay in bed until stiffness resolves"],
    answer: 2,
    explanation: "Morning stiffness in RA is caused by joint inflammation and fluid accumulation during rest. Warm showers, warm water soaks, or heating pads in the morning reduce stiffness by increasing blood flow and relaxing muscles around joints."
  },
  {
    id: 42,
    subject: "Medical-Surgical Nursing",
    question: "A patient has a serum calcium level of 7.2 mg/dL. Which sign would the nurse assess for?",
    choices: ["Hypertension", "Bradycardia", "Trousseau's sign", "Hyperreflexia without muscle spasms"],
    answer: 2,
    explanation: "Trousseau's sign (carpal spasm when BP cuff inflated above systolic pressure for 3 minutes) indicates hypocalcemia (<8.5 mg/dL). Along with Chvostek's sign, these are classic signs of tetany from low calcium."
  },
  {
    id: 43,
    subject: "Medical-Surgical Nursing",
    question: "A patient with systemic lupus erythematosus (SLE) asks about sun exposure. The nurse advises:",
    choices: ["Moderate sun exposure improves symptoms", "Use SPF 15 sunscreen on sunny days only", "Avoid direct sun exposure and use SPF 30+ sunscreen daily", "Sun exposure has no effect on SLE"],
    answer: 2,
    explanation: "Ultraviolet light is a major trigger for SLE flares. Patients must avoid direct sun exposure, use SPF 30+ broad-spectrum sunscreen daily (even on cloudy days), wear protective clothing, and avoid peak sun hours."
  },
  {
    id: 44,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a colostomy has output of liquid stool. The colostomy is most likely located in the:",
    choices: ["Sigmoid colon", "Descending colon", "Ascending colon", "Transverse colon"],
    answer: 2,
    explanation: "The consistency of colostomy output depends on its location. Ascending colon colostomies produce liquid output because most water absorption has not yet occurred. Sigmoid colostomies produce formed stool."
  },
  {
    id: 45,
    subject: "Medical-Surgical Nursing",
    question: "A patient with peripheral artery disease (PAD) reports leg pain when walking that is relieved by rest. The nurse documents this as:",
    choices: ["Rest pain", "Intermittent claudication", "Venous insufficiency pain", "Neuropathic pain"],
    answer: 1,
    explanation: "Intermittent claudication is the hallmark symptom of PAD — cramping, aching, or fatigue in the muscles during exercise that is relieved by rest. It occurs due to insufficient arterial blood flow to meet the muscle's oxygen demands during activity."
  },
  {
    id: 46,
    subject: "Medical-Surgical Nursing",
    question: "A patient with acute pancreatitis has an elevated serum amylase and lipase. Which pain assessment finding is MOST characteristic?",
    choices: ["Right lower quadrant pain with rebound tenderness", "Epigastric pain radiating to the back, worsened by eating", "Colicky flank pain radiating to the groin", "Sharp chest pain worsened by inspiration"],
    answer: 1,
    explanation: "Acute pancreatitis classically presents with severe epigastric pain that radiates to the back, is constant and boring in nature, and is worsened by eating and drinking. The pain is partially relieved by sitting up and leaning forward."
  },
  {
    id: 47,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic venous insufficiency has leg ulcers. Which characteristic distinguishes these from arterial ulcers?",
    choices: ["Located on tips of toes and heels", "Pale wound base with minimal drainage", "Located near the medial malleolus with irregular borders", "Extremely painful with loss of peripheral pulses"],
    answer: 2,
    explanation: "Venous ulcers occur near the medial malleolus, have irregular borders, are shallow with moderate to heavy drainage, and are mildly painful. Arterial ulcers are on toes/pressure points, have a pale/necrotic base, are well-defined, and are extremely painful."
  },
  {
    id: 48,
    subject: "Medical-Surgical Nursing",
    question: "A patient is scheduled for a colonoscopy. The nurse's priority pre-procedure instruction is:",
    choices: ["NPO for 2 hours prior", "Complete bowel preparation the day before", "Avoid blood thinners for 1 week", "Take a Fleet enema 1 hour before"],
    answer: 1,
    explanation: "Thorough bowel preparation (polyethylene glycol solution or similar) is essential the day before colonoscopy to clear the colon for visualization. Inadequate prep is the most common cause of incomplete or repeated procedures."
  },
  {
    id: 49,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a tracheostomy develops respiratory distress. The nurse's FIRST action is to:",
    choices: ["Call the physician", "Suction the tracheostomy", "Remove the inner cannula", "Administer supplemental oxygen"],
    answer: 1,
    explanation: "When a tracheostomy patient develops respiratory distress, the first action is to suction the tracheostomy to clear any mucus obstruction. This is the most common cause of distress in tracheostomy patients and should be addressed immediately."
  },
  {
    id: 50,
    subject: "Medical-Surgical Nursing",
    question: "A patient with multiple myeloma is at highest risk for which complication?",
    choices: ["Pulmonary embolism", "Pathologic fractures", "Hyperglycemia", "Pulmonary hypertension"],
    answer: 1,
    explanation: "Multiple myeloma causes plasma cell proliferation in bone marrow, leading to osteolytic lesions that weaken bones. Pathologic fractures (fractures from minimal trauma) are a major complication, most commonly affecting the vertebrae and ribs."
  },
  {
    id: 51,
    subject: "Medical-Surgical Nursing",
    question: "A patient develops compartment syndrome after a long bone fracture. The nurse's PRIORITY intervention is:",
    choices: ["Elevate the extremity above heart level", "Apply ice packs to reduce swelling", "Notify the physician immediately", "Loosen or remove the cast"],
    answer: 3,
    explanation: "In compartment syndrome, the cast must be loosened or removed immediately to relieve pressure. This is a nursing action that can be done before physician notification. The physician must then be notified, as fasciotomy may be needed. Elevation worsens arterial flow — avoid."
  },
  {
    id: 52,
    subject: "Medical-Surgical Nursing",
    question: "A patient with liver cirrhosis has a serum albumin of 2.0 g/dL. The nurse understands this contributes to ascites primarily because of:",
    choices: ["Increased bile production", "Decreased oncotic pressure", "Increased portal vein pressure only", "Increased lymphatic drainage"],
    answer: 1,
    explanation: "Albumin maintains colloid oncotic pressure in blood vessels. Low serum albumin (hypoalbuminemia) decreases oncotic pressure, allowing fluid to shift from the vascular space into the peritoneal cavity, causing ascites."
  },
  {
    id: 53,
    subject: "Medical-Surgical Nursing",
    question: "A patient with hyperosmolar hyperglycemic state (HHS) has a blood glucose of 820 mg/dL. Which IV fluid is given FIRST?",
    choices: ["D5W", "0.45% NaCl (half normal saline)", "0.9% NaCl (normal saline)", "3% NaCl (hypertonic saline)"],
    answer: 2,
    explanation: "The initial fluid for HHS is 0.9% NaCl (isotonic) to restore circulating volume and blood pressure. Once hemodynamically stable, 0.45% NaCl is given to correct free water deficit. D5W is added when glucose drops to 250–300 mg/dL."
  },
  {
    id: 54,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a chest tube develops subcutaneous emphysema. The nurse assesses for:",
    choices: ["Air leak in the collection chamber", "Crackling sensation under the skin near the insertion site", "Decreased breath sounds bilaterally", "Blood in the collection chamber"],
    answer: 1,
    explanation: "Subcutaneous emphysema occurs when air leaks into subcutaneous tissue. The nurse assesses for a crackling (crepitus) sensation when palpating the skin near the chest tube insertion site. It indicates air tracking under the skin."
  },
  {
    id: 55,
    subject: "Medical-Surgical Nursing",
    question: "A patient is admitted with acute appendicitis. The nurse expects which finding on physical examination?",
    choices: ["Left lower quadrant tenderness", "Rebound tenderness at McBurney's point", "Cullen's sign", "Murphy's sign"],
    answer: 1,
    explanation: "McBurney's point is located 1/3 of the way between the right anterior superior iliac spine and the umbilicus. Rebound tenderness at this point is a classic sign of appendicitis. Murphy's sign is associated with cholecystitis."
  },
  {
    id: 56,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-coronary artery bypass graft (CABG) has a mediastinal chest tube with 300 mL of bright red drainage in the first hour. The nurse's action is to:",
    choices: ["Document as expected finding", "Milk the chest tube", "Notify the surgeon immediately", "Increase IV fluid rate"],
    answer: 2,
    explanation: "Normal mediastinal drainage post-CABG is less than 100–200 mL/hour. Drainage of 300 mL/hour of bright red blood indicates excessive bleeding and requires immediate physician notification, as surgical re-exploration may be needed."
  },
  {
    id: 57,
    subject: "Medical-Surgical Nursing",
    question: "A patient with Alzheimer's disease becomes agitated every evening. The nurse recognizes this as:",
    choices: ["Delirium", "Sundowning", "Psychosis", "Medication side effect"],
    answer: 1,
    explanation: "Sundowning is a pattern of increased confusion, agitation, and behavioral disturbances in dementia patients that typically occurs in the late afternoon or evening. It may be related to fatigue, circadian rhythm disruption, or reduced light."
  },
  {
    id: 58,
    subject: "Medical-Surgical Nursing",
    question: "A patient with sickle cell crisis is admitted. Which intervention is the PRIORITY?",
    choices: ["Blood transfusion", "Administer hydroxyurea", "IV fluids and pain management", "Supplemental oxygen only"],
    answer: 2,
    explanation: "During sickle cell crisis (vaso-occlusive crisis), the priorities are IV hydration (to reduce blood viscosity and promote sickling reversal), aggressive pain management (opioids), and supplemental oxygen. Hydration is the cornerstone of treatment."
  },
  {
    id: 59,
    subject: "Medical-Surgical Nursing",
    question: "A patient is prescribed phenytoin (Dilantin) for seizures. Which serum level indicates therapeutic range?",
    choices: ["2–5 mcg/mL", "10–20 mcg/mL", "25–35 mcg/mL", "40–50 mcg/mL"],
    answer: 1,
    explanation: "Therapeutic serum phenytoin level is 10–20 mcg/mL. Levels below 10 indicate subtherapeutic (seizures may occur); above 20 indicates toxicity (nystagmus, ataxia, confusion). The nurse monitors drug levels and neurological status."
  },
  {
    id: 60,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic low back pain is scheduled for a discectomy. Post-operatively, the nurse's priority assessment is:",
    choices: ["Pain level", "Bladder and bowel function", "Ambulation ability", "Wound appearance"],
    answer: 1,
    explanation: "Post-discectomy, the nurse must assess bladder and bowel function to detect cauda equina syndrome — a surgical emergency caused by nerve compression, resulting in urinary retention, bowel incontinence, and saddle anesthesia."
  },
  {
    id: 61,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a peptic ulcer reports sudden severe, board-like abdominal rigidity. The nurse suspects:",
    choices: ["Gastroesophageal reflux", "Perforation of the ulcer", "Gastric outlet obstruction", "Stress ulcer"],
    answer: 1,
    explanation: "Sudden severe, board-like (rigid) abdominal rigidity indicates peritonitis from a perforated peptic ulcer — a surgical emergency. The stomach contents spill into the peritoneal cavity, causing chemical peritonitis."
  },
  {
    id: 62,
    subject: "Medical-Surgical Nursing",
    question: "A patient with hypertension is started on an ACE inhibitor. The nurse monitors for which common side effect?",
    choices: ["Bradycardia", "Dry, persistent cough", "Hyperkalemia only in elderly", "Peripheral edema"],
    answer: 1,
    explanation: "ACE inhibitors (lisinopril, enalapril) commonly cause a dry, persistent, non-productive cough due to accumulation of bradykinin. This is the most common reason for discontinuation. ARBs (losartan) do not cause this cough."
  },
  {
    id: 63,
    subject: "Medical-Surgical Nursing",
    question: "A patient with benign prostatic hyperplasia (BPH) is unable to void. The nurse's FIRST intervention is:",
    choices: ["Restrict fluid intake", "Insert a urinary catheter immediately", "Encourage the patient to try voiding in the shower", "Perform bladder scan to confirm retention"],
    answer: 3,
    explanation: "Before catheterization, the nurse should confirm urinary retention with a bladder scan. This is a non-invasive assessment that confirms the diagnosis and avoids unnecessary catheterization. If retention is confirmed, catheterization may then be performed."
  },
  {
    id: 64,
    subject: "Medical-Surgical Nursing",
    question: "A patient is diagnosed with pulmonary tuberculosis. The nurse implements which type of isolation?",
    choices: ["Contact precautions", "Droplet precautions", "Airborne precautions", "Reverse isolation"],
    answer: 2,
    explanation: "Tuberculosis is transmitted via airborne droplet nuclei (<5 microns). Airborne precautions require a negative-pressure private room, N95 respirator (not just a surgical mask), and keeping the door closed."
  },
  {
    id: 65,
    subject: "Medical-Surgical Nursing",
    question: "A patient with heart failure is prescribed digoxin. Which assessment finding requires the nurse to HOLD the medication and notify the physician?",
    choices: ["Heart rate of 68 bpm", "Serum digoxin level of 1.5 ng/mL", "Heart rate of 48 bpm", "Blood pressure of 130/82 mmHg"],
    answer: 2,
    explanation: "Digoxin is held and the physician notified if the apical heart rate is below 60 bpm in adults (or below 70 in children) before administration. A heart rate of 48 bpm indicates bradycardia, a sign of digoxin toxicity."
  },
  {
    id: 66,
    subject: "Medical-Surgical Nursing",
    question: "A patient with ulcerative colitis is having 15 bloody diarrheal stools per day. Which complication is the nurse most concerned about?",
    choices: ["Constipation", "Toxic megacolon", "Colorectal polyps", "Anal fissures"],
    answer: 1,
    explanation: "Toxic megacolon is a life-threatening complication of severe ulcerative colitis where the colon dilates massively. Signs include fever, tachycardia, abdominal distension, and decreased bowel sounds. It can lead to perforation and sepsis."
  },
  {
    id: 67,
    subject: "Medical-Surgical Nursing",
    question: "A patient with hypercalcemia (serum Ca 12.5 mg/dL) is being treated. The nurse expects which intervention FIRST?",
    choices: ["Administer calcium gluconate IV", "Restrict dietary calcium", "IV hydration with normal saline", "Administer calcitonin"],
    answer: 2,
    explanation: "Initial treatment for hypercalcemia is aggressive IV hydration with 0.9% NaCl to promote urinary calcium excretion and dilute serum calcium. After rehydration, loop diuretics (furosemide) may be added to further promote calcium excretion."
  },
  {
    id: 68,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-abdominal surgery has absent bowel sounds, abdominal distension, and no flatus on day 3. The nurse suspects:",
    choices: ["Normal post-operative finding", "Paralytic ileus", "Bowel obstruction", "Anastomotic leak"],
    answer: 1,
    explanation: "Paralytic ileus (absent peristalsis) is common post-abdominal surgery, but typically resolves by day 2–3. Persistent absent bowel sounds with distension and no flatus beyond 3 days suggests prolonged ileus requiring intervention (NPO, NG tube, mobilization)."
  },
  {
    id: 69,
    subject: "Medical-Surgical Nursing",
    question: "A patient with nephrotic syndrome has massive proteinuria. The nurse monitors for which associated complication?",
    choices: ["Hyperkalemia", "Hypertension crisis", "Deep vein thrombosis", "Respiratory alkalosis"],
    answer: 2,
    explanation: "Nephrotic syndrome causes loss of clotting regulatory proteins (antithrombin III, protein C and S) in the urine, creating a hypercoagulable state. DVT and pulmonary embolism are significant complications requiring prophylaxis."
  },
  {
    id: 70,
    subject: "Medical-Surgical Nursing",
    question: "A patient with amyotrophic lateral sclerosis (ALS) is most at risk for which life-threatening complication?",
    choices: ["Cognitive decline", "Renal failure", "Respiratory failure", "Cardiac arrhythmias"],
    answer: 2,
    explanation: "ALS progressively destroys motor neurons, including those controlling respiratory muscles. Respiratory failure is the most common cause of death in ALS patients. Monitoring respiratory function and planning for ventilatory support are essential."
  },
  {
    id: 71,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a below-the-knee amputation refuses to look at the residual limb. The nurse's BEST response is:",
    choices: ["Force the patient to look at the wound during dressing changes", "Ignore the behavior as it will resolve on its own", "Acknowledge the feelings and allow the patient to progress at their own pace", "Immediately refer to psychiatry"],
    answer: 2,
    explanation: "Refusing to look at an amputation is a normal grief response related to altered body image. The nurse should acknowledge the patient's feelings without judgment and allow them to process the loss at their own pace while offering support and encouraging adjustment gradually."
  },
  {
    id: 72,
    subject: "Medical-Surgical Nursing",
    question: "A patient is receiving total parenteral nutrition (TPN). The nurse monitors for which MOST common complication?",
    choices: ["Fluid overload", "Hyperglycemia", "Hypocalcemia", "Metabolic alkalosis"],
    answer: 1,
    explanation: "Hyperglycemia is the most common metabolic complication of TPN due to the high dextrose concentration. Blood glucose should be monitored every 4–6 hours, and insulin may be added to the TPN bag or given separately."
  },
  {
    id: 73,
    subject: "Medical-Surgical Nursing",
    question: "A patient with Guillain-Barré syndrome (GBS) is admitted. The nurse's PRIORITY assessment is:",
    choices: ["Level of consciousness", "Swallowing ability", "Respiratory rate and depth", "Deep tendon reflexes"],
    answer: 2,
    explanation: "GBS causes ascending paralysis that can involve respiratory muscles. Respiratory failure is the most life-threatening complication. The nurse's priority is to monitor respiratory rate, depth, and oxygen saturation and be prepared for intubation."
  },
  {
    id: 74,
    subject: "Medical-Surgical Nursing",
    question: "A patient with anemia has a hemoglobin of 7 g/dL. Which symptom is the nurse most likely to assess?",
    choices: ["Hypertension", "Bradycardia", "Pallor and fatigue", "Polycythemia"],
    answer: 2,
    explanation: "Hemoglobin of 7 g/dL indicates significant anemia. Classic symptoms include pallor (skin, conjunctiva, nail beds), fatigue, weakness, dyspnea on exertion, and tachycardia (compensatory mechanism). Severe anemia may cause chest pain and dizziness."
  },
  {
    id: 75,
    subject: "Medical-Surgical Nursing",
    question: "A patient with glaucoma is using timolol (beta-blocker) eye drops. The nurse monitors for which systemic side effect?",
    choices: ["Hypertension", "Tachycardia", "Bradycardia and bronchospasm", "Hyperglycemia"],
    answer: 2,
    explanation: "Topical beta-blocker eye drops (timolol) are systemically absorbed and can cause bradycardia, heart block, and bronchospasm. These are dangerous in patients with asthma, COPD, or cardiac conduction disorders."
  },
  {
    id: 76,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a pheochromocytoma is scheduled for surgery. Pre-operatively, which medication is administered?",
    choices: ["Beta-blockers alone", "Alpha-blockers (phenoxybenzamine) before beta-blockers", "Diuretics to control hypertension", "ACE inhibitors"],
    answer: 1,
    explanation: "Alpha-blockers (phenoxybenzamine) MUST be given before beta-blockers in pheochromocytoma. Giving beta-blockers first causes unopposed alpha-adrenergic stimulation, resulting in severe hypertensive crisis. Alpha blockade is established first for 10–14 days, then beta-blockers are added."
  },
  {
    id: 77,
    subject: "Medical-Surgical Nursing",
    question: "A patient with an ileostomy reports high-volume liquid output. The nurse's priority concern is:",
    choices: ["Skin breakdown", "Fluid and electrolyte imbalance", "Body image disturbance", "Dietary restrictions"],
    answer: 1,
    explanation: "An ileostomy produces high-volume, liquid output rich in electrolytes (sodium, potassium). The priority concern is dehydration and electrolyte imbalance. The nurse monitors intake and output, fluid balance, skin turgor, and electrolyte levels."
  },
  {
    id: 78,
    subject: "Medical-Surgical Nursing",
    question: "A patient develops acute kidney injury (AKI) after receiving a contrast dye injection. The nurse recognizes this as:",
    choices: ["Pre-renal AKI", "Intrinsic AKI", "Post-renal AKI", "Functional AKI"],
    answer: 1,
    explanation: "Contrast-induced nephropathy is a form of intrinsic (intrarenal) AKI caused by direct nephrotoxic damage to renal tubules by iodinated contrast media. Prevention includes pre-hydration with IV saline and minimizing contrast dose."
  },
  {
    id: 79,
    subject: "Medical-Surgical Nursing",
    question: "A patient with Hodgkin's lymphoma is undergoing chemotherapy. The nurse notices WBC of 1,800/mm3. The priority nursing diagnosis is:",
    choices: ["Imbalanced nutrition", "Fatigue", "Risk for infection", "Impaired skin integrity"],
    answer: 2,
    explanation: "A WBC of 1,800/mm3 indicates neutropenia (normal: 4,500–11,000/mm3), which places the patient at extreme risk for life-threatening infection. Neutropenic precautions, hand hygiene, and monitoring for fever are priorities."
  },
  {
    id: 80,
    subject: "Medical-Surgical Nursing",
    question: "A patient with type 1 diabetes becomes confused, diaphoretic, and tremulous. The nurse's FIRST action is to:",
    choices: ["Administer glucagon IM", "Call the physician", "Give 15 grams of fast-acting carbohydrates orally", "Check blood glucose first if the patient is conscious"],
    answer: 3,
    explanation: "For a conscious patient with signs of hypoglycemia, check blood glucose FIRST to confirm, then follow the 15-15 rule (15g carbohydrates, recheck in 15 minutes). If unconscious, give glucagon IM or IV dextrose 50%."
  },
  {
    id: 81,
    subject: "Medical-Surgical Nursing",
    question: "A patient with GERD is being discharged. Which instruction does the nurse prioritize?",
    choices: ["Lie down immediately after meals to rest the stomach", "Eat large meals to reduce acid production between meals", "Elevate the head of the bed 6–8 inches", "Drink large amounts of fluid with meals"],
    answer: 2,
    explanation: "Elevating the head of the bed 6–8 inches (using blocks, not just pillows) reduces nighttime acid reflux by using gravity to keep gastric contents in the stomach. Patients should also avoid lying down for 2–3 hours after eating."
  },
  {
    id: 82,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a spinal cord injury at C5 has which HIGHEST level of function expected?",
    choices: ["No motor or sensory function below injury", "Can breathe independently and has arm movement", "Full arm and hand function with limited trunk control", "Normal function with only minor sensory loss"],
    answer: 1,
    explanation: "C5 injury allows shoulder abduction and elbow flexion. Patients can use manual wheelchairs with assistance, have some arm movement, but cannot breathe independently (diaphragm innervated by C3-C5 — partial function). They need long-term ventilatory support or are borderline."
  },
  {
    id: 83,
    subject: "Medical-Surgical Nursing",
    question: "A patient is receiving IV vancomycin too rapidly. The nurse assesses for which adverse reaction?",
    choices: ["Anaphylaxis", "Red man syndrome", "Stevens-Johnson syndrome", "Drug fever"],
    answer: 1,
    explanation: "Red man syndrome is caused by rapid infusion of vancomycin, causing histamine release. It presents with flushing, erythema, and pruritus on the face, neck, and upper torso. Prevention: infuse over at least 60 minutes. Treatment: slow the infusion and give diphenhydramine."
  },
  {
    id: 84,
    subject: "Medical-Surgical Nursing",
    question: "A patient with COPD has barrel chest. The nurse understands this is caused by:",
    choices: ["Accumulation of pleural fluid", "Air trapping causing hyperinflation of the lungs", "Increased respiratory muscle mass", "Pleural thickening from recurrent infections"],
    answer: 1,
    explanation: "In COPD, air trapping (incomplete expiration due to loss of elastic recoil) causes hyperinflation of the lungs over time. This pushes the diaphragm down and increases the anteroposterior diameter of the chest, creating the characteristic barrel chest appearance."
  },
  {
    id: 85,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a femoral arterial line has a sudden change in waveform and loss of pulse distal to the insertion site. The nurse's FIRST action is to:",
    choices: ["Flush the arterial line with heparin", "Reposition the patient", "Notify the physician immediately", "Apply a warm compress to the extremity"],
    answer: 2,
    explanation: "Loss of pulse distal to an arterial line insertion site suggests arterial occlusion/thrombosis — a vascular emergency requiring immediate physician notification and possible embolectomy. Time is critical to prevent limb ischemia."
  },
  {
    id: 86,
    subject: "Medical-Surgical Nursing",
    question: "A patient with hypophosphatemia (serum phosphorus 1.5 mg/dL) is at risk for which complication?",
    choices: ["Seizures", "Respiratory failure from muscle weakness", "Cardiac arrhythmias", "Renal calculi"],
    answer: 1,
    explanation: "Severe hypophosphatemia causes muscle weakness, including respiratory muscles. This can lead to respiratory failure. Phosphorus is essential for ATP production, and deficiency impairs muscle and nerve function."
  },
  {
    id: 87,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic kidney disease is advised to limit phosphorus intake. Which food should the nurse instruct the patient to AVOID?",
    choices: ["White rice", "Fresh fruits", "Dairy products and nuts", "Leafy vegetables"],
    answer: 2,
    explanation: "Dairy products (milk, cheese, yogurt) and nuts are high in phosphorus. In CKD, impaired phosphorus excretion leads to hyperphosphatemia, which causes secondary hyperparathyroidism, renal osteodystrophy, and vascular calcification."
  },
  {
    id: 88,
    subject: "Medical-Surgical Nursing",
    question: "A patient is post-transurethral resection of the prostate (TURP). The nurse notices the urinary catheter is draining pink-tinged urine that has become bright red. The nurse's action is:",
    choices: ["Increase irrigation rate and notify surgeon", "Document as expected finding", "Remove the catheter", "Restrict oral fluid intake"],
    answer: 0,
    explanation: "Post-TURP, urine should be light pink and progressively clear. Bright red urine indicates arterial bleeding. The nurse should increase the continuous bladder irrigation rate to prevent clot formation and notify the surgeon immediately."
  },
  {
    id: 89,
    subject: "Medical-Surgical Nursing",
    question: "A patient with meningitis has a positive Kernig's sign. The nurse assesses for this by:",
    choices: ["Flexing the neck and observing for hip/knee flexion", "Extending the knee with the hip flexed 90 degrees and observing for resistance/pain", "Pressing the mastoid bone and observing for pain", "Tapping the cheek and observing for facial twitching"],
    answer: 1,
    explanation: "Kernig's sign: with the patient supine and hip flexed at 90 degrees, extending the knee causes pain/resistance due to meningeal irritation. Brudzinski's sign: flexing the neck causes involuntary hip and knee flexion."
  },
  {
    id: 90,
    subject: "Medical-Surgical Nursing",
    question: "A patient with myocardial infarction is prescribed morphine sulfate. The nurse understands that morphine is given to:",
    choices: ["Prevent arrhythmias", "Reduce pain and decrease cardiac workload by causing vasodilation", "Increase cardiac contractility", "Dissolve the coronary thrombus"],
    answer: 1,
    explanation: "Morphine relieves chest pain, reduces anxiety, and causes venodilation — reducing preload and myocardial oxygen demand. It also has some arterial vasodilation, reducing afterload. Pain relief itself reduces sympathetic activation and decreases cardiac workload."
  },
  {
    id: 91,
    subject: "Medical-Surgical Nursing",
    question: "A patient is receiving heparin infusion and develops sudden drop in platelet count to 80,000/mm3 on day 8. The nurse suspects:",
    choices: ["Disseminated intravascular coagulation (DIC)", "Heparin-induced thrombocytopenia (HIT)", "Idiopathic thrombocytopenic purpura (ITP)", "Normal heparin side effect requiring no action"],
    answer: 1,
    explanation: "Heparin-induced thrombocytopenia (HIT) is an immune-mediated reaction occurring 5–14 days after heparin initiation. It causes a >50% drop in platelets and paradoxically increases thrombosis risk. Heparin must be STOPPED immediately and alternative anticoagulation (argatroban) started."
  },
  {
    id: 92,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic liver disease has a PT/INR of 3.2. The nurse understands this is because:",
    choices: ["The kidneys are not producing clotting factors", "The liver is not producing clotting factors", "The patient is on too much heparin", "The patient has vitamin B12 deficiency"],
    answer: 1,
    explanation: "The liver produces all clotting factors except factor VIII. In liver disease, impaired synthesis of clotting factors prolongs the PT/INR, indicating increased bleeding risk. Vitamin K administration may help if deficiency is also present."
  },
  {
    id: 93,
    subject: "Medical-Surgical Nursing",
    question: "A patient with acute angle-closure glaucoma presents to the emergency department. Which symptom is MOST characteristic?",
    choices: ["Gradual painless vision loss", "Sudden severe eye pain with halos around lights and nausea", "Floaters and flashes of light", "Gradual tunnel vision"],
    answer: 1,
    explanation: "Acute angle-closure glaucoma presents with sudden severe eye pain, headache, nausea/vomiting, blurred vision, and halos around lights due to corneal edema. IOP rises acutely, requiring emergency treatment to prevent permanent vision loss."
  },
  {
    id: 94,
    subject: "Medical-Surgical Nursing",
    question: "A patient with chronic heart failure is weighed daily. The nurse instructs the patient to notify the physician if weight increases by more than:",
    choices: ["0.5 kg (1 lb) in one day", "1 kg (2 lbs) in one week", "2 kg (4.4 lbs) in 2 days or 2.3 kg (5 lbs) in a week", "3 kg (6.6 lbs) in one month"],
    answer: 2,
    explanation: "Daily weights detect early fluid retention in heart failure. Patients should report a weight gain of >2 kg (4.4 lbs) in 2 days or >2.3 kg (5 lbs) in one week to their provider, as this indicates fluid retention requiring medication adjustment."
  },
  {
    id: 95,
    subject: "Medical-Surgical Nursing",
    question: "A patient with esophageal varices has had a Minnesota tube inserted. The nurse's priority safety measure is:",
    choices: ["Keep scissors at bedside to cut the tube if respiratory distress occurs", "Ensure the tube is secured to the patient's forehead", "Inflate the esophageal balloon before the gastric balloon", "Keep the patient in a flat supine position"],
    answer: 0,
    explanation: "Scissors must be kept at the bedside when a Minnesota or Sengstaken-Blakemore tube is in place. If the balloon migrates upward and obstructs the airway, the tube must be cut immediately to release the balloon and restore the airway."
  },
  {
    id: 96,
    subject: "Medical-Surgical Nursing",
    question: "A patient with Meniere's disease is experiencing a severe attack. Which intervention provides MOST relief?",
    choices: ["Encourage the patient to walk to improve balance", "Have the patient lie still in a quiet, dark room", "Apply warm compresses to both ears", "Encourage fluid intake to thin inner ear fluid"],
    answer: 1,
    explanation: "During a Meniere's attack (vertigo, tinnitus, hearing loss, aural fullness), lying still in a quiet, dark room reduces stimulation and minimizes vertigo. Movement worsens the attack. Antihistamines and antiemetics are also used."
  },
  {
    id: 97,
    subject: "Medical-Surgical Nursing",
    question: "A patient with atrial fibrillation has a heart rate of 150 bpm and blood pressure of 78/50 mmHg. The nurse anticipates which treatment?",
    choices: ["Oral beta-blockers", "IV amiodarone over 24 hours", "Immediate synchronized cardioversion", "Digoxin loading dose"],
    answer: 2,
    explanation: "Unstable atrial fibrillation with hemodynamic compromise (hypotension, altered consciousness, chest pain) requires immediate synchronized cardioversion. When the patient is hemodynamically stable, rate control with medications is used."
  },
  {
    id: 98,
    subject: "Medical-Surgical Nursing",
    question: "A patient with a spinal cord injury has urinary retention. The nurse inserts an intermittent catheter. How often should intermittent catheterization be performed?",
    choices: ["Every 1–2 hours", "Every 4–6 hours", "Every 8–12 hours", "Once daily"],
    answer: 1,
    explanation: "Intermittent catheterization should be performed every 4–6 hours to prevent bladder overdistension (which can trigger autonomic dysreflexia) and to maintain bladder volumes under 400–500 mL. It is preferred over indwelling catheters to reduce UTI risk."
  },
  {
    id: 99,
    subject: "Medical-Surgical Nursing",
    question: "A patient post-renal transplant develops fever, decreased urine output, and tenderness over the graft site on day 3. The nurse suspects:",
    choices: ["Hyperacute rejection (occurs within minutes)", "Acute rejection", "Chronic rejection", "Urinary tract infection only"],
    answer: 1,
    explanation: "Acute rejection occurs days to weeks post-transplant and presents with fever, decreased urine output, graft tenderness, rising creatinine, and hypertension. It is treated with high-dose corticosteroids or anti-rejection agents and is often reversible."
  },
  {
    id: 100,
    subject: "Medical-Surgical Nursing",
    question: "A patient is receiving chemotherapy and develops a temperature of 38.5°C with an absolute neutrophil count (ANC) of 400/mm3. The nurse's PRIORITY action is:",
    choices: ["Administer acetaminophen and monitor", "Obtain blood cultures and administer IV broad-spectrum antibiotics immediately", "Place the patient in reverse isolation only", "Notify the physician and wait for further orders"],
    answer: 1,
    explanation: "Febrile neutropenia (fever + ANC <500/mm3) is a medical emergency with high mortality risk. The priority is to obtain blood cultures (before antibiotics if possible) and administer IV broad-spectrum antibiotics within 1 hour. Every hour of delay increases mortality."
  }


];
