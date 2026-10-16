export interface FAQItem {
  question: string;
  answer: string;
}

export const serviceFaqs: Record<string, FAQItem[]> = {
  "smart-key-programming": [
    {
      question: "What is smart key programming?",
      answer: "Smart key programming is the process of synchronizing a computerized proximity key fob to your vehicle's Engine Control Unit (ECU) and immobilizer system so that keyless entry, push-button ignition, and remote locking functions work flawlessly."
    },
    {
      question: "How long does it take to program a smart key?",
      answer: "For most vehicles, smart key programming takes between 25 to 45 minutes on-site. Certain high-security German or luxury vehicles (such as BMW, Audi, or Mercedes-Benz) may require up to 60 minutes for security access handshake."
    },
    {
      question: "Can you program a smart key if I lost all my keys?",
      answer: "Yes, we specialize in 'All Keys Lost' scenarios. We can decode your vehicle's lock cylinder, generate an emergency physical blade, and program a brand-new smart key directly to your car's ECU without requiring an expensive dealership tow."
    },
    {
      question: "How much cheaper is smart key programming compared to dealerships in Pakistan?",
      answer: "Our smart key programming typically costs 50% to 70% less than authorized car dealerships in Islamabad and Rawalpindi. Plus, dealerships usually make you wait 2 to 4 weeks for factory delivery, whereas we provide same-day on-site programming."
    },
    {
      question: "Can you provide mobile on-site smart key programming in Islamabad & Rawalpindi?",
      answer: "Yes, our mobile locksmith vans are equipped with computerized diagnostic tablets and dealer-grade programmers. We travel directly to your home, office, parking lot, or roadside anywhere in Islamabad and Rawalpindi."
    },
    {
      question: "Which car brands do you support for smart key programming?",
      answer: "We program smart keys for Toyota, Honda, Suzuki, KIA, Hyundai, Nissan, Lexus, BMW, Audi, Mercedes-Benz, MG, Changan, Haval, Proton, Mitsubishi, and imported Japanese JDM cars."
    },
    {
      question: "What proof of ownership do you require before programming a key?",
      answer: "For vehicle security, we require the registered owner's original CNIC, vehicle registration book/smart card, and the presence of the vehicle owner or authorized representative before initiating programming."
    },
    {
      question: "Will programming a new smart key erase my old lost key?",
      answer: "Yes, for maximum security we can wipe all previously paired keys from your car's immobilizer memory. If someone finds your old lost key, it will no longer start the car or open the doors."
    },
    {
      question: "Do you supply the smart key fob or do I need to bring my own?",
      answer: "We stock authentic OEM and premium aftermarket smart key fobs for almost every popular make and model. You are also welcome to bring your own fob, and we will program and laser-cut the blade for you."
    },
    {
      question: "Does the smart key come with a laser-cut emergency physical key blade?",
      answer: "Yes, every smart key fob we program includes a precision laser-cut physical backup blade that fits your driver door lock in case your car's 12V battery ever runs completely flat."
    },
    {
      question: "Will programming an aftermarket smart key void my car's electronics warranty?",
      answer: "No, our dealer-level diagnostic tools program keys via standard OBD2 communication protocols without splicing wires or altering the vehicle's factory wiring harness."
    },
    {
      question: "Do your programmed smart keys come with a warranty?",
      answer: "Yes, all smart key fobs supplied and programmed by Shaheen Locksmith include a 6-month operational warranty covering transponder chip and remote frequency functions."
    }
  ],

  "push-start-programming": [
    {
      question: "What is push start key programming?",
      answer: "Push start programming configures the high-frequency RFID transponder and proximity antennas inside the cabin so that touching the Start/Stop button instantly starts the engine without inserting a physical key."
    },
    {
      question: "Why does my car say 'Key Not Detected' even when the fob is inside?",
      answer: "This is usually caused by a drained CR2032 key battery, a degraded internal transponder chip, interference, or a de-synchronized RFID antenna. We can diagnose the frequency on-site and either replace the battery or re-pair the fob."
    },
    {
      question: "How do I start a push-start car if the key fob battery is dead?",
      answer: "Most Japanese and modern cars allow you to press the mechanical logo on the back of the key fob directly against the Start/Stop button while holding down the brake pedal to initiate an emergency RFID induction start."
    },
    {
      question: "Can you program push-start fobs for imported Japanese JDM cars?",
      answer: "Yes, we program push-start fobs for popular Japanese imports such as Toyota Vitz, Aqua, Passo, Raize, Honda Vezel, Fit, Nissan Dayz, Note e-Power, Suzuki Alto JDM, Hustler, and Mira."
    },
    {
      question: "Can you program a second push-start spare fob while I wait?",
      answer: "Yes, duplicate push-start programming takes only 15 to 30 minutes if you already have one working key."
    },
    {
      question: "Can you program push start keys for Chinese brands like Haval and MG in Islamabad?",
      answer: "Yes, we support Haval H6, Jolion, MG HS, MG ZS, Changan Oshan X7, Alsvin, and Cherry Tiggo using the latest 2026 diagnostic protocols."
    },
    {
      question: "What happens if my push-button switch itself is faulty?",
      answer: "Our technicians test both the key fob frequency and the vehicle's ignition button circuit to identify whether the issue is key synchronization or an ignition push switch malfunction."
    },
    {
      question: "Do you offer emergency roadside assistance for push-start lockouts?",
      answer: "Yes, if you are stranded anywhere on the Islamabad Highway, Kashmir Highway, GT Road, or Motorway toll plazas, our mobile team arrives within 20 to 35 minutes."
    },
    {
      question: "How many push-start keys can be registered to one vehicle?",
      answer: "Most modern vehicle systems allow between 4 to 8 unique smart push-start fobs to be registered simultaneously."
    },
    {
      question: "Do you have original factory push-start fobs?",
      answer: "Yes, we provide both 100% genuine factory OEM fobs and premium high-grade aftermarket options to match your budget."
    },
    {
      question: "Will a newly programmed push-start key support remote boot release?",
      answer: "Yes, full remote functionality including lock, unlock, panic alarm, and trunk/boot release is tested and verified before handing over the key."
    }
  ],

  "remote-key-programming": [
    {
      question: "What is the difference between a transponder key and a remote key?",
      answer: "A transponder chip starts the vehicle's engine by communicating with the immobilizer, while the remote transmitter operates keyless locking/unlocking and trunk release. A remote key combines both in one unit."
    },
    {
      question: "My car starts with the key, but the remote buttons stopped locking the doors. What should I do?",
      answer: "This is often due to frequency de-synchronization or a dead transmitter circuit. We can re-sync the remote frequency or replace the remote circuit board on-site in 15 minutes."
    },
    {
      question: "Can you convert my separate car key and remote into a stylish flip key?",
      answer: "Yes! We specialize in flip key conversions for Toyota, Honda, Suzuki, and Hyundai. We transfer your transponder and remote electronics into an upgraded modern folding flip-key shell."
    },
    {
      question: "What frequencies do you support for remote key programming?",
      answer: "We support both 315MHz and 433MHz frequencies, including rolling code, fixed code, and ASK/FSK modulation types used across Asian, European, and American automobiles."
    },
    {
      question: "Can you program a remote key for older model vehicles?",
      answer: "Yes, we program remote fobs for older vehicles such as 2000-2015 Toyota Corolla, Honda Civic, City, Suzuki Swift, Cultus, and imported sedans."
    },
    {
      question: "How long does remote key programming take?",
      answer: "Standard remote key programming takes about 15 to 25 minutes."
    },
    {
      question: "Will remote programming fix my central locking actuator?",
      answer: "If the central locking motors inside the doors are jammed or burnt out, we also inspect and repair central locking actuators alongside key programming."
    },
    {
      question: "Can you program universal aftermarket remotes?",
      answer: "Yes, we generate and program KD/Xhorse universal smart remotes that look and function just like original factory equipment."
    },
    {
      question: "Why did my remote stop working after changing the battery?",
      answer: "Some vehicles drop their paired remote memory when power is completely interrupted. We can perform an OBD2 or manual onboard learning sequence to re-pair it immediately."
    },
    {
      question: "Can you cut the physical metal key attached to the remote?",
      answer: "Yes, we use computerized CNC laser key cutting machines to carve high-security laser track or double-sided edge cuts with factory precision."
    },
    {
      question: "Do you offer doorstep remote key programming in Rawalpindi?",
      answer: "Yes, our mobile locksmith service covers Saddar, Bahria Town, DHA, Satellite Town, Westridge, Chaklala, and all surrounding sectors."
    }
  ],

  "hybrid-vehicle-smart-keys": [
    {
      question: "How is hybrid vehicle smart key programming different from petrol cars?",
      answer: "Hybrid vehicles (like Prius, Aqua, Vezel) use dual security microcontrollers linked to high-voltage inverter ECUs, smart power distribution modules, and proximity smart units. Programming requires specialized hybrid-compatible diagnostic software."
    },
    {
      question: "Can you program smart keys for Toyota Prius, Aqua, and Corolla Cross?",
      answer: "Yes, we have extensive experience programming keys for all generations of Toyota Prius (Gen 2, 3, 4), Aqua/Prius C, Fielder Hybrid, Axio Hybrid, Camry Hybrid, and Corolla Cross."
    },
    {
      question: "Can you program keys for Honda Hybrid vehicles like Vezel, Fit, and Grace?",
      answer: "Yes, we handle Honda Vezel, Fit Hybrid, Grace, Shuttle, and Accord Hybrid, including the smart entry and immobilizer handshake protocols."
    },
    {
      question: "What happens if all smart keys are lost on a hybrid vehicle?",
      answer: "Dealerships often quote over 150,000 PKR and demand replacing the entire Smart ECU and Immobilizer box. Shaheen Locksmith can reset and reprogram your existing hybrid Smart ECU on-site, saving you huge costs."
    },
    {
      question: "Does hybrid key programming affect the high voltage hybrid battery?",
      answer: "Not at all. We connect safely via the vehicle's standard 12V auxiliary OBD2 diagnostic port, leaving the high-voltage traction battery system completely untouched."
    },
    {
      question: "Can you program Nissan e-Power smart keys in Islamabad?",
      answer: "Yes, we support Nissan Note e-Power, Serena e-Power, and Kicks e-Power smart key registration and emergency key blades."
    },
    {
      question: "Why does my hybrid car flash the orange key warning indicator on the instrument cluster?",
      answer: "An orange key icon indicates that the smart receiver is losing signal with the transponder, either due to a weakening key battery or a failing transponder coil. We perform instant diagnostic testing."
    },
    {
      question: "How long does hybrid key generation take when all keys are lost?",
      answer: "All-keys-lost smart ECU reset and key pairing for hybrids usually takes approximately 45 to 60 minutes on-site."
    },
    {
      question: "Do you supply Japanese JDM hybrid key fobs with genuine logos?",
      answer: "Yes, we stock original Japanese specification fobs for Toyota (with A/C button), Honda, and Nissan."
    },
    {
      question: "Can you provide mobile service for hybrid cars stranded in parking basements?",
      answer: "Yes, our technicians carry portable battery packs and compact OBD2 programming tablets to service your hybrid right inside residential or mall underground parking lots."
    },
    {
      question: "Are your hybrid keys covered by a warranty?",
      answer: "Yes, every hybrid smart key comes with a 6-month warranty on electronics and transponder performance."
    }
  ],

  "car-key-duplication": [
    {
      question: "Why should I get a spare car key made before losing my only key?",
      answer: "Duplicating an existing working key is fast, simple, and inexpensive. Losing your only key requires emergency lock picking, cylinder decoding, and immobilizer resetting, which costs significantly more."
    },
    {
      question: "How long does it take to duplicate a car key?",
      answer: "Standard mechanical and transponder key duplication takes only 10 to 20 minutes at our workshop or at your doorstep."
    },
    {
      question: "Do you use computerized laser key cutting machines?",
      answer: "Yes, we utilize computerized CNC automatic key cutting machines that measure existing key wear and cut the new key to original factory code specifications, preventing lock jamming."
    },
    {
      question: "Can you duplicate high-security laser track (sidewinder) keys?",
      answer: "Yes, we cut 2-track and 4-track internal and external wave laser keys found on Honda, BMW, Audi, Mercedes, Lexus, and Volkswagen."
    },
    {
      question: "Does my spare key need to be programmed, or just cut?",
      answer: "Almost all cars made after the year 2000 contain an electronic immobilizer transponder chip inside the key head. The metal blade must be cut, and the chip must be programmed to your car's ECU to start the engine."
    },
    {
      question: "Can you clone an immobilizer chip without plugging into the car?",
      answer: "For many popular vehicles (ID46, 4D, 8A transponders), we can read and clone the chip data using our handheld transponder cloner in under 5 minutes."
    },
    {
      question: "What is the cost of duplicating a car key in Islamabad?",
      answer: "Prices vary based on whether it is a standard manual key, transponder chip key, or full proximity smart key. We provide transparent upfront quotes that are far lower than showroom rates."
    },
    {
      question: "Can you duplicate keys for commercial vans and pickups?",
      answer: "Yes, we duplicate keys for Toyota Hilux, Revo, Fortuner, Hiace, Suzuki Bolan, Ravi, Isuzu D-Max, and Hyundai Shehzore."
    },
    {
      question: "What should I bring with me for key duplication?",
      answer: "Please bring your original working key, vehicle registration document or card, and original CNIC."
    },
    {
      question: "Will the duplicate key work on all door locks, trunk, and ignition?",
      answer: "Yes, our automated laser cutting guarantees smooth rotation across every cylinder on your vehicle without sticking or resistance."
    },
    {
      question: "Do you provide mobile key duplication at my doorstep in Islamabad?",
      answer: "Yes, we offer on-site mobile key cutting across all sectors of Islamabad (F, G, E, H, I sectors) and Rawalpindi."
    }
  ],

  "lost-key-service": [
    {
      question: "What should I do if I have lost all keys to my car?",
      answer: "Do not attempt to force the lock or tow the vehicle to an expensive dealership. Call Shaheen Locksmith. Our mobile locksmith van will come to your exact location, unlock the car without damage, cut a new key, and program it on the spot."
    },
    {
      question: "How do you make a key without having the original?",
      answer: "We use professional optical decoders and Lishi picking tools inserted into your driver's door lock cylinder. This reads the exact wafer heights (depths and cut codes). We enter this code into our CNC machine to cut a brand-new factory-grade key blade."
    },
    {
      question: "Can someone who stole or found my old keys steal my car?",
      answer: "No. When we program your new key, we wipe the vehicle's immobilizer memory. Any lost or stolen keys will be permanently deactivated and unable to start your engine."
    },
    {
      question: "How long does your lost key replacement service take?",
      answer: "From arrival to testing the new key, the entire all-keys-lost replacement process typically takes between 40 to 60 minutes."
    },
    {
      question: "Do I need to tow my car to your workshop?",
      answer: "No towing is required! Our mobile locksmith unit comes fully equipped with power generators, cutting machinery, and diagnostic computers to complete 100% of the job on-site."
    },
    {
      question: "What legal documents are required for lost key service?",
      answer: "To prevent unauthorized duplication, we strictly require proof of ownership (vehicle registration smart card or book) and the owner's valid CNIC."
    },
    {
      question: "Do you service lost keys for luxury and imported cars?",
      answer: "Yes, we make keys from scratch for Mercedes-Benz, BMW, Audi, Lexus, Range Rover, Porsche, and all Japanese/Korean models."
    },
    {
      question: "Can you rekey my physical door locks if I am worried about the lost key?",
      answer: "Yes, we can mechanically re-pin your door and ignition cylinders so the lost physical metal key will no longer turn in the lock."
    },
    {
      question: "How much does all-keys-lost replacement cost compared to dealerships?",
      answer: "Dealerships often charge 80,000 to 250,000 PKR and require replacing the complete lock set and ECU with a 3-week waiting period. We do it the same day on-site for a fraction of that price."
    },
    {
      question: "Are your mobile lost key services available 24/7 in Islamabad & Rawalpindi?",
      answer: "Yes, our emergency mobile technicians are on standby 24 hours a day, 7 days a week, including holidays."
    }
  ],

  "ybr-yamaha-key-making": [
    {
      question: "Can you make a new key for Yamaha YBR 125 if all keys are lost?",
      answer: "Yes, we specialize in Yamaha YBR key making. We can fabricate a brand-new key matching the ignition, petrol tank cap, and side helmet lock even if the original key is completely missing."
    },
    {
      question: "Do you support the magnetic shutter lock on Yamaha YBR 125G and YB125Z?",
      answer: "Yes! Yamaha bikes feature a magnetic anti-theft ignition shutter. We encode the specific magnetic polarities into the head of your new key so the anti-tamper shutter opens and closes smoothly."
    },
    {
      question: "How long does it take to make a Yamaha YBR key on-site?",
      answer: "Making a Yamaha key takes approximately 15 to 25 minutes."
    },
    {
      question: "Will one key work for the ignition, fuel tank, and side cover lock?",
      answer: "Yes, we cut the key to the master wafer profile so that a single key opens your ignition, petrol tank lid, and side battery cover seamlessly."
    },
    {
      question: "Can you duplicate an existing Yamaha key while I wait?",
      answer: "Yes, duplicating an existing YBR key takes less than 5 minutes at our shop."
    },
    {
      question: "Do you use original Yamaha style key blanks?",
      answer: "Yes, we stock high-grade Yamaha-styled blanks with proper grip heads and durable brass alloy blades that resist bending."
    },
    {
      question: "Can you repair a jammed Yamaha YBR ignition switch?",
      answer: "Yes, if your key is getting stuck or difficult to turn in the ignition barrel, we clean, re-wafer, and lubricate the cylinder to restore smooth operation."
    },
    {
      question: "Do you make keys for other bikes like Suzuki GS150, GR150, and Honda CB150F?",
      answer: "Yes, we provide master key cutting and magnetic shutter key services for Suzuki GR150, GS150, Honda CB150F, CG125, Pridor, and heavy bikes."
    },
    {
      question: "What should I do if my Yamaha key broke off inside the petrol tank lock?",
      answer: "Do not use glue or force. Our technicians use micro-extraction tools to safely retrieve the snapped piece without damaging the tank lock mechanism, then cut you a fresh replacement key."
    },
    {
      question: "Can you come to my location in Islamabad or Rawalpindi if my bike is locked?",
      answer: "Yes, our mobile bike locksmith arrives at your home, office, or roadside with portable key-cutting gear."
    }
  ],

  "digital-locker-key-creation": [
    {
      question: "Can you make a physical backup key for an electronic digital safe or locker?",
      answer: "Yes, most electronic digital safes have a concealed manual override lock behind a faceplate. If you forgot the PIN code or the internal battery died, we can cut a precision high-security manual override key."
    },
    {
      question: "What types of safe and digital locker keys do you cut?",
      answer: "We cut tubular keys, double-bitted safe keys, dimple keys, cross keys, and high-security laser track keys for electronic safes, fireproof cabinets, and bank-style lockers."
    },
    {
      question: "Can you generate a safe key if all original keys are lost?",
      answer: "Yes, we impression or scope the internal lever tumblers inside the override cylinder to craft a master key without drilling or destroying your expensive safe."
    },
    {
      question: "Which safe and locker brands do you support in Pakistan?",
      answer: "We support Diplomat, Chubbsafes, Godrej, SentrySafe, Yale, Guardall, Falcon, and locally manufactured digital bank and commercial lockers."
    },
    {
      question: "Will creating a key damage the electronic keypad or digital locking mechanism?",
      answer: "No, our non-destructive key creation leaves the digital keypad, solenoid motor, and electronic circuit boards completely intact."
    },
    {
      question: "What verification is needed before making a digital locker key?",
      answer: "We uphold strict confidentiality and security. Service is provided only to the verified property owner or authorized business manager with valid CNIC."
    },
    {
      question: "How long does it take to create a safe override key?",
      answer: "Depending on the safe lock mechanism (tubular, dimple, or lever), key generation takes 30 to 60 minutes."
    },
    {
      question: "Can you duplicate a double-bitted high security safe key?",
      answer: "Yes, we operate specialized safe key milling machines to duplicate symmetric double-bitted keys with exact micrometer tolerances."
    },
    {
      question: "Do you service commercial safes for offices and jewelry stores in Islamabad?",
      answer: "Yes, we regularly service corporate offices, banks, retail outlets, and residential safes across Islamabad and Rawalpindi."
    },
    {
      question: "Can you reset the digital PIN code after opening the safe?",
      answer: "Yes, once accessed, we reset the motherboard memory so you can set your own fresh electronic passcode."
    }
  ],

  "door-lock-repair": [
    {
      question: "Why is my car door lock stiff or refusing to turn?",
      answer: "Car door locks are exposed to dust, moisture, and road grime. Over time, internal brass wafers wear out, springs weaken, or dried grease jams the cylinder. We dismantle, clean, replace worn wafers, and lubricate the mechanism."
    },
    {
      question: "My key turns in the door lock, but the door doesn't unlock. What is wrong?",
      answer: "This usually indicates a broken plastic clip, detached mechanical connecting rod, or failed lock latch inside the door panel. We repair the internal linkage without requiring an expensive new cylinder."
    },
    {
      question: "Can you fix car door locks damaged during a break-in or burglary attempt?",
      answer: "Yes, if an intruder jammed a screwdriver or pick into your door lock, we can rebuild the internal tumbler wafers to restore smooth operation with your original car key."
    },
    {
      question: "How long does car door lock repair take?",
      answer: "A door lock repair typically takes between 30 to 50 minutes per door."
    },
    {
      question: "Can you repair central locking actuator motors inside the door?",
      answer: "Yes, if one specific door fails to lock/unlock when using the remote fob, the door actuator motor is likely failing. We repair or replace faulty actuators on-site."
    },
    {
      question: "Do you service door locks for all car makes?",
      answer: "Yes, we repair door locks on Toyota, Honda, Suzuki, KIA, Hyundai, German cars, and commercial trucks."
    },
    {
      question: "Will repairing my door lock require a new separate key?",
      answer: "No! We rebuild and re-pin the lock cylinder to match your original ignition key, so one single key continues to operate everything."
    },
    {
      question: "Do you come to my home for door lock repairs?",
      answer: "Yes, we provide mobile service across Islamabad and Rawalpindi so you don't have to leave your car disassembled at a workshop."
    },
    {
      question: "How can I prevent my car door locks from jamming in winter?",
      answer: "Avoid spraying water or WD-40 inside the keyhole. Use specialized dry PTFE or graphite lubricants. We can service and winterize your locks to prevent freezing and stiffness."
    },
    {
      question: "Is there a warranty on door lock repairs?",
      answer: "Yes, our door lock repairs include a 3-month service warranty on mechanical components."
    }
  ],

  "door-lock-replacement": [
    {
      question: "When should I replace my car door lock cylinder instead of repairing it?",
      answer: "Replacement is necessary when the cylinder housing is cracked, internal locking pins are sheared beyond rebuild, or severe collision damage has distorted the door latch assembly."
    },
    {
      question: "If you replace my door lock, will I have to carry two different keys?",
      answer: "Not with Shaheen Locksmith! We rekey (re-pin) the brand-new replacement cylinder before installation to match your existing ignition key perfectly."
    },
    {
      question: "Do you provide genuine OEM replacement door lock cylinders?",
      answer: "Yes, we supply genuine OEM and certified aftermarket door lock cylinders for Japanese, Korean, European, and domestic vehicles."
    },
    {
      question: "How long does a door lock replacement take?",
      answer: "Complete door panel disassembly, cylinder replacement, linkage calibration, and testing takes about 45 to 60 minutes."
    },
    {
      question: "Can you replace the trunk/boot lock cylinder as well?",
      answer: "Yes, we replace and re-pin trunk lid lock cylinders, tailgate locks on SUVs, and commercial van cargo door locks."
    },
    {
      question: "Will replacing the door lock damage the interior door trim or moisture barrier?",
      answer: "No, our technicians use specialized plastic trim pry tools and re-seal the moisture barrier cleanly to prevent water leaks and panel rattles."
    },
    {
      question: "Can you replace both driver and passenger door locks simultaneously?",
      answer: "Yes, we can replace complete vehicle lock sets (both front doors, trunk, and ignition) if your keys were stolen and you want complete peace of mind."
    },
    {
      question: "Do you offer door lock replacement for commercial fleet vehicles?",
      answer: "Yes, we service fleet vehicles, taxis, rental cars, and company delivery vans across Islamabad and Rawalpindi."
    },
    {
      question: "How much does car door lock replacement cost?",
      answer: "Cost depends on the vehicle make and model. We provide upfront fixed pricing including parts and labor with zero hidden charges."
    },
    {
      question: "Can this service be performed at my office or residence?",
      answer: "Yes, our mobile locksmith vans carry all necessary parts and tools to complete the job at your location."
    }
  ],

  "ignition-repair": [
    {
      question: "Why is my car key stuck in the ignition and won't turn?",
      answer: "Ignition lock cylinders contain delicate brass split-wafers. Over time, key wear or burrs cause a wafer to drop out of alignment, locking the cylinder in the 'Off' position. We extract and rebuild the damaged wafers to restore normal turning."
    },
    {
      question: "My key snapped inside the ignition. Can you extract it without replacing the whole ignition?",
      answer: "Yes! In 95% of cases, we use micro broken-key extractors to remove the snapped blade cleanly without damaging the ignition cylinder, then cut you a fresh replacement key."
    },
    {
      question: "Is ignition sticking common on Honda and Toyota cars?",
      answer: "Yes, Honda Civics and City (2006-2022) with high-security laser keys commonly suffer from worn tumblers jamming the ignition. We carry specialized Honda ignition repair kits and fix them on-site in 40 minutes."
    },
    {
      question: "Can a jammed steering wheel lock prevent the ignition from turning?",
      answer: "Yes, tension from the steering wheel lock can bind the ignition. Try turning the steering wheel firmly left and right while turning the key. If it remains locked, our technician will release the tension mechanism safely."
    },
    {
      question: "How long does an ignition repair take?",
      answer: "Most ignition repairs are completed on-site within 40 to 60 minutes."
    },
    {
      question: "Will an ignition repair affect my immobilizer system?",
      answer: "No, the transponder reader coil around the ignition barrel is carefully preserved, ensuring your car recognizes your keys without any dashboard error lights."
    },
    {
      question: "Can you repair push-to-start ignition switch issues?",
      answer: "Yes, we diagnose electronic Start/Stop push buttons, brake pedal safety switches, and steering column lock actuators (ESCL)."
    },
    {
      question: "Do you come to my car if it is stranded on the road?",
      answer: "Yes, we provide emergency roadside ignition repair across all highways and sectors of Islamabad and Rawalpindi."
    },
    {
      question: "Why should I not force my key with pliers if the ignition is stuck?",
      answer: "Forcing the key will bend the steering column shaft, break the key blade inside, or crack the cast aluminum housing, dramatically increasing repair costs. Call a locksmith immediately."
    },
    {
      question: "Do your ignition repairs come with a warranty?",
      answer: "Yes, all ignition rebuilds and wafer replacements include a 6-month warranty."
    }
  ],

  "ignition-replacement": [
    {
      question: "When is a complete ignition replacement necessary?",
      answer: "Ignition replacement is required when the internal aluminum housing is cracked, the electrical ignition switch contacts are burnt out, or the mechanical assembly was ruined during a theft attempt."
    },
    {
      question: "If you replace my ignition, will I need one key for the ignition and another for the doors?",
      answer: "No. Shaheen Locksmith custom re-pins the brand-new ignition cylinder to match your original door key so you maintain one unified key for your entire car."
    },
    {
      question: "Do you program the new ignition to my car's immobilizer ECU?",
      answer: "Yes, we calibrate the transponder immobilizer coil and register the keys so your vehicle starts immediately with factory security standards."
    },
    {
      question: "How long does ignition replacement take?",
      answer: "Complete ignition housing removal, security shear-bolt extraction, new assembly installation, and key programming takes approximately 60 to 90 minutes."
    },
    {
      question: "How do you remove the tamper-proof security bolts holding the ignition?",
      answer: "Factory ignitions are fastened with headless shear bolts to prevent theft. Our technicians use precision extraction tools to remove them cleanly without damaging your steering column."
    },
    {
      question: "Do you stock ignition assemblies for popular cars in Pakistan?",
      answer: "Yes, we carry ignition assemblies for Toyota Corolla, Yaris, Hilux, Honda Civic, City, Suzuki Cultus, Swift, Wagon R, Alto, KIA, Hyundai, and more."
    },
    {
      question: "Can you replace the electrical switch backplate without replacing the key cylinder?",
      answer: "Yes, if your key turns fine but the car does not crank or interior accessories cut out, we can replace just the rear electrical ignition contact switch."
    },
    {
      question: "Is this service available at my home or workplace?",
      answer: "Yes, our mobile locksmith team performs ignition replacements on-site anywhere in Islamabad and Rawalpindi."
    },
    {
      question: "What is the warranty on a new ignition assembly?",
      answer: "All new ignition units installed by Shaheen Locksmith come with a 6-month product and installation warranty."
    },
    {
      question: "What documents do I need to provide for an ignition replacement?",
      answer: "You will need to provide original vehicle registration documents and your valid CNIC for verification."
    }
  ],

  "immobilizer-keys": [
    {
      question: "What is an immobilizer key and how does it protect my car?",
      answer: "An immobilizer key has a microchip (transponder) embedded in the plastic head. When inserted into the ignition, the car's computer sends an encrypted RF interrogation signal. If the key's unique code matches the ECU, the engine starts. Without it, fuel and spark are cut off."
    },
    {
      question: "Why is the padlock or key symbol flashing on my dashboard?",
      answer: "A flashing key or padlock light means the vehicle's immobilizer system cannot authenticate the key. This happens if the transponder chip is damaged, the antenna ring is faulty, or the ECU lost its key registration."
    },
    {
      question: "Can you fix an immobilizer problem without changing the entire ECU?",
      answer: "Yes! Dealerships frequently force customers to buy expensive new ECUs. We have advanced diagnostic gear to re-flash, synchronize, or virginize your existing immobilizer and write new transponder keys directly."
    },
    {
      question: "Which transponder chip types can you program?",
      answer: "We program all major transponder chip formats including ID46, 4D67/68, 8A (Toyota/Lexus/Subaru H-chip), Megamos 48 (Audi/VW/Honda), Hitag Pro, and MQB platform keys."
    },
    {
      question: "Can an ordinary key maker cut a working immobilizer key?",
      answer: "No. A regular key maker can only cut the metal blade. If the transponder chip is not digitally paired to your car's immobilizer ECU, the engine will crank but never start."
    },
    {
      question: "Can you bypass or reset an immobilizer if the system is corrupt?",
      answer: "Yes, we offer immobilizer reset, EEPROM reading, and ECU resynchronization for damaged or corrupted vehicle security modules."
    },
    {
      question: "How long does immobilizer key programming take?",
      answer: "Standard OBD2 immobilizer pairing takes 20 to 35 minutes. EEPROM / bench programming for European cars takes 45 to 60 minutes."
    },
    {
      question: "Do you service immobilizer keys for imported Japanese cars?",
      answer: "Yes, we specialize in JDM imports such as Toyota Vitz, Passo, Aqua, Fielder, Daihatsu Mira, Move, Tanto, Suzuki Hustler, and Alto JDM."
    },
    {
      question: "What happens if my car's immobilizer antenna ring is broken?",
      answer: "We test the RF field of your antenna ring using signal detectors. If damaged, we repair or replace the coil to restore communication."
    },
    {
      question: "Do your immobilizer keys come with a guarantee?",
      answer: "Yes, all transponder chips and programming services carry a 6-month hassle-free guarantee."
    }
  ],

  "power-window-repair": [
    {
      question: "Why has my car power window stopped rolling up or down?",
      answer: "Common causes include a blown fuse, failed window regulator cable, worn motor brushes, faulty master switch, or the glass slipping out of its rubber track. We diagnose the root cause on-site."
    },
    {
      question: "My power window makes a grinding or clicking noise when I press the button. What is it?",
      answer: "A grinding noise almost always means the steel cable inside the window regulator has frayed or tangled around the motor spool. We can replace the cable assembly or regulator mechanism."
    },
    {
      question: "Can you temporarily roll up and secure a stuck window in an emergency?",
      answer: "Yes! If rain or security is an issue, our mobile technician will come immediately to manually raise and secure your window, then repair the mechanism."
    },
    {
      question: "Do you repair the driver-side master window switch console?",
      answer: "Yes, we test and repair the multi-button driver master console, clean oxidized contacts, or replace the switch block."
    },
    {
      question: "How long does a power window repair take?",
      answer: "Most window repairs take between 30 to 50 minutes per door."
    },
    {
      question: "Will repairing the window damage my door's tint or speaker wiring?",
      answer: "No, our technicians work with extreme care to protect your window tinting film, moisture plastic barrier, and speaker cables."
    },
    {
      question: "Can you fix slow or sluggish windows?",
      answer: "Sluggish movement is caused by dried channel lubricants, dirt buildup in the felt guide channels, or low voltage supply. We clean, lubricate, and restore smooth, quiet speed."
    },
    {
      question: "Do you service power windows on all Japanese and local car models?",
      answer: "Yes, we service Toyota Corolla, Yaris, Fortuner, Honda Civic, City, Suzuki Swift, Cultus, Wagon R, Alto, KIA, Hyundai, and more."
    },
    {
      question: "Do you provide on-site power window repairs in Islamabad & Rawalpindi?",
      answer: "Yes, our mobile locksmith and auto-lock technicians can come directly to your home or office."
    },
    {
      question: "Is there a warranty on your power window repairs?",
      answer: "Yes, we provide a 3-month warranty on repaired regulators, cables, and motors."
    }
  ],

  "power-window-replacement": [
    {
      question: "When is a complete power window regulator and motor replacement needed?",
      answer: "Replacement is recommended when the regulator scissor arms are bent, gear teeth are stripped, motor windings are burnt out, or the cable housing is cracked beyond repair."
    },
    {
      question: "Do you provide genuine and high-grade replacement window regulators?",
      answer: "Yes, we stock OEM and heavy-duty aftermarket power window regulators and motors with high-torque copper windings."
    },
    {
      question: "How long does a power window regulator replacement take?",
      answer: "A complete regulator and motor assembly replacement takes about 45 to 60 minutes."
    },
    {
      question: "Can you convert manual roll-up crank windows into electric power windows?",
      answer: "Yes, we install power window conversion kits for cars with manual crank handles (such as Suzuki Alto, Mehran, Bolan, and pickups) with factory-style door switches."
    },
    {
      question: "Will the new motor operate at factory speed and silence?",
      answer: "Yes, our high-grade replacement motors are lubricated with synthetic silicone grease and operate quietly and swiftly."
    },
    {
      question: "Can you replace power window motors on luxury and imported SUVs?",
      answer: "Yes, we handle Prado, Land Cruiser, Lexus LX, Audi, BMW, and Mercedes-Benz frameless and heavy glass doors."
    },
    {
      question: "Does the replacement include resetting the auto-up/down anti-pinch sensor?",
      answer: "Yes, modern windows have an anti-pinch safety sensor. After installation, we calibrate the motor's upper and lower travel limits so one-touch auto-up works smoothly."
    },
    {
      question: "Do you offer doorstep power window replacement in Rawalpindi?",
      answer: "Yes, we cover Saddar, Bahria Town, DHA, Chaklala, Westridge, and surrounding areas."
    },
    {
      question: "How much does a power window replacement cost?",
      answer: "Prices depend on the car model and whether you need just the motor, regulator, or full assembly. We provide transparent upfront quotes before starting work."
    },
    {
      question: "What warranty do you provide on newly installed window motors?",
      answer: "All new motors and regulators carry a 6-month performance warranty."
    }
  ],

  "sunroof-repair": [
    {
      question: "What are the most common sunroof problems in cars?",
      answer: "The most frequent issues are sunroofs stuck open or tilted, clicking noises when operating, snapped drive cables, water leaking into the headliner, or faulty sunroof control switches."
    },
    {
      question: "Can you close and seal my sunroof if it gets stuck open in the rain?",
      answer: "Yes! We provide emergency mobile service to manually reset the drive motor, align the glass, and seal your sunroof tight against rain and dust."
    },
    {
      question: "Why is water leaking from my sunroof into the car cabin?",
      answer: "Sunroof frames have 4 corner drain tubes that route water down through the car pillars. When leaves and debris clog these tubes, water overflows into your roof lining. We flush and clear the drain lines."
    },
    {
      question: "Can you repair the sunroof motor and track without replacing the entire roof?",
      answer: "Yes, we repair individual components such as motor gearboxes, guide shoes, cable tensioners, and wind deflectors, saving you the immense cost of full roof assembly replacement."
    },
    {
      question: "How long does a sunroof repair take?",
      answer: "Depending on whether it is a track realignment, drain declogging, or motor rebuild, repairs take 1 to 2 hours."
    },
    {
      question: "Do you service panoramic glass sunroofs on modern SUVs?",
      answer: "Yes, we repair panoramic dual-pane sunroofs and motorized fabric sunshades on KIA Sportage, Hyundai Tucson, MG HS, Haval H6, and Changan Oshan X7."
    },
    {
      question: "Why does my sunroof make a rattling or squeaking noise on bumpy roads?",
      answer: "Rattling is caused by loose track mounting screws, dried rubber seals, or worn guide sliders. We adjust track tension, replace worn sliders, and apply specialized rubber conditioners."
    },
    {
      question: "Do you service sunroofs on Honda Civic (Reborn, Rebirth, Turbo)?",
      answer: "Yes, Honda Civic sunroof mechanism repair, switch replacement, and cable synchronization is one of our most frequent specialties."
    },
    {
      question: "Can you calibrate the anti-pinch and one-touch tilt/slide memory?",
      answer: "Yes, if the sunroof bounces back when closing, we perform a factory ECU reset to relearn closing positions."
    },
    {
      question: "Do you provide on-site mobile sunroof repairs in Islamabad?",
      answer: "Yes, our technicians arrive at your location with specialized tools for diagnostic testing and repair."
    }
  ],

  "vehicle-lockout-service": [
    {
      question: "What should I do if I locked my keys inside my car?",
      answer: "Stay calm and do not break your window or use wire coat hangers which bend the frame. Call Shaheen Locksmith. We provide 100% damage-free door unlocking using professional automotive lock-picking tools."
    },
    {
      question: "How quickly can your locksmith reach my location in Islamabad or Rawalpindi?",
      answer: "Our mobile emergency units are positioned across key hubs in Islamabad and Rawalpindi, allowing us to arrive at your vehicle within 20 to 30 minutes of your call."
    },
    {
      question: "Will unlocking my car scratch the paint or tear the weatherstripping?",
      answer: "Guaranteed NO damage. We do not use destructive brute-force wedges. We use precision Lishi lock picks that pick the door lock cylinder wafer-by-wafer, or soft rubber air bladders with non-marring tools."
    },
    {
      question: "Can you unlock my trunk/boot if the keys are locked inside?",
      answer: "Yes, we can unlock the trunk directly via the trunk keyhole or access the interior cabin and release the electric trunk switch."
    },
    {
      question: "Can you unlock luxury vehicles like BMW, Mercedes, and Audi with deadlocks?",
      answer: "Yes. German luxury cars feature electronic deadlock systems that cannot be opened with coat hangers. We use specialized European HU66 and HU100 laser decoders to unlock them safely."
    },
    {
      question: "What if the car engine is running while locked out?",
      answer: "We treat running-engine and child-locked situations as top priority emergencies and dispatch the nearest mobile technician immediately."
    },
    {
      question: "Do you verify ownership before unlocking a car?",
      answer: "Yes, to safeguard our community, our technician will ask to verify your identification and vehicle registration once the car is opened."
    },
    {
      question: "How long does it take to unlock the vehicle once you arrive?",
      answer: "Our master locksmiths typically unlock standard vehicles in under 5 minutes and high-security luxury cars in 10 to 15 minutes."
    },
    {
      question: "Are your lockout services available late at night?",
      answer: "Yes, our emergency lockout rescue team is available 24 hours a day, 7 days a week, 365 days a year."
    },
    {
      question: "How much does vehicle lockout service cost in Islamabad?",
      answer: "We offer fair, fixed emergency rates with no hidden fees. You get an exact quote over the phone before we dispatch."
    }
  ],

  "emergency-locksmith-service": [
    {
      question: "What situations qualify as an emergency locksmith service?",
      answer: "Emergencies include being locked out of your car late at night, keys broken in the ignition on a busy highway, a child or pet accidentally locked inside, or lost keys leaving you stranded in an unfamiliar area."
    },
    {
      question: "Do you operate 24 hours a day, including weekends and public holidays?",
      answer: "Yes, Shaheen Locksmith operates a dedicated 24/7/365 emergency response team across Islamabad, Rawalpindi, and surrounding motorway routes."
    },
    {
      question: "Which areas in Islamabad and Rawalpindi do you cover for emergencies?",
      answer: "We cover all Islamabad sectors (F-6, F-7, F-8, F-10, F-11, G-sectors, I-sectors, E-11, B-17, DHA Islamabad, Bahria Town) and Rawalpindi (Saddar, Satellite Town, Westridge, Chaklala Scheme, Peshawar Road, GT Road)."
    },
    {
      question: "How fast will an emergency technician arrive?",
      answer: "Our average emergency arrival time is between 20 to 35 minutes depending on traffic and sector distance."
    },
    {
      question: "Can your mobile van make a brand new car key on the roadside at night?",
      answer: "Yes! Our mobile workshops carry heavy-duty on-board power supplies, automated CNC key cutting machines, and computerized ECU programmers to make keys anywhere, anytime."
    },
    {
      question: "How can I contact your emergency response team immediately?",
      answer: "You can call our direct emergency hotline at 0308-5556779 or send an instant WhatsApp location pin to 0345-7507053."
    },
    {
      question: "Do you charge extra for late night emergency calls?",
      answer: "We maintain highly reasonable and transparent nighttime emergency rates, clearly quoted to you over the phone before dispatch."
    },
    {
      question: "Can you jump-start my car if the battery is dead and caused the lockout?",
      answer: "Yes, our mobile emergency vans carry 12V high-capacity booster jump packs to start your vehicle if battery drainage accompanied your lockout."
    },
    {
      question: "What should I do while waiting for your emergency locksmith to arrive?",
      answer: "Stay in a safe, well-lit location near your vehicle. Do not attempt to force the door, as this could set off security alarms or trigger electronic lockouts."
    },
    {
      question: "Are your emergency technicians verified and trustworthy?",
      answer: "Yes, all Shaheen Locksmith staff are vetted, professional automotive locksmiths with over 15 years of trusted community service in the twin cities."
    }
  ],

  "remote-battery-replacement": [
    {
      question: "What are the symptoms of a dying key fob battery?",
      answer: "Signs include reduced remote range (having to stand right next to the car), having to press buttons multiple times, intermittent push-start detection, or a 'Key Battery Low' alert on your car's digital dashboard."
    },
    {
      question: "Which key fob battery types do you stock?",
      answer: "We carry authentic, fresh-date coin cell lithium batteries including CR2032, CR2025, CR2016, CR1620, CR1632, and CR2450 from trusted brands like Panasonic, Maxell, and Sony."
    },
    {
      question: "Will replacing the battery erase the key's programming or memory?",
      answer: "No. Key programming is stored in non-volatile flash memory on the transponder chip. Replacing the battery will not wipe your key's synchronization."
    },
    {
      question: "Can you change the battery while I wait at your shop or mobile van?",
      answer: "Yes, battery replacement takes only 2 to 3 minutes. We also clean battery contact terminals and test the RF signal output on our frequency reader."
    },
    {
      question: "How long does a new key fob battery typically last?",
      answer: "A high-quality lithium coin battery lasts between 2 to 4 years for standard remotes, and 1 to 2 years for smart proximity push-start keys that transmit continuously."
    },
    {
      question: "Can I replace the key battery myself?",
      answer: "You can, but modern smart fobs use delicate plastic clips that crack easily if pried with the wrong tool, and touching the internal antenna circuit with static electricity can damage the board. We do it safely and affordably."
    },
    {
      question: "Why did my key still not work after I put in a new battery?",
      answer: "This could be due to inserting the battery upside down (inverted polarity), a dirty contact prong, a dead replacement battery from old stock, or a damaged quartz oscillator. We test your fob with our spectrum analyzer to diagnose the exact issue."
    },
    {
      question: "Do you test the signal frequency after replacing the battery?",
      answer: "Yes, we always verify that the remote is transmitting strong 315MHz or 433MHz signals before completing the service."
    },
    {
      question: "Can you replace worn or broken rubber buttons on my key fob?",
      answer: "Yes, we also replace cracked rubber button pads and damaged fob shells to restore your key to like-new condition."
    },
    {
      question: "Do you offer battery replacement service during roadside assistance calls?",
      answer: "Yes, our mobile vans always carry full assortments of fresh batteries on every service call across Islamabad and Rawalpindi."
    }
  ],

  "digital-locker-unlocking": [
    {
      question: "Can you open a digital safe if I forgot the passcode?",
      answer: "Yes, we specialize in non-destructive digital safe opening. We can decode the mechanical emergency override lock or use electronic diagnostic bypass tools to safely unlock the safe."
    },
    {
      question: "What if the safe's internal batteries are dead and I don't have the backup key?",
      answer: "Most digital safes have external emergency battery terminals (or micro-USB ports) beneath the keypad to supply temporary power. If that fails, our technicians pick the manual override cylinder without drilling."
    },
    {
      question: "Will you damage or drill my safe to open it?",
      answer: "Our primary objective is non-destructive entry. In over 90% of cases, we open digital lockers and safes without drilling or damaging the safe, leaving it 100% reusable."
    },
    {
      question: "Can you reset the electronic passcode after unlocking the safe?",
      answer: "Yes, once opened, we access the internal reset button, clear the memory, and help you program a brand-new custom PIN code."
    },
    {
      question: "Which safe brands and models do you unlock?",
      answer: "We unlock Diplomat, Chubbsafes, Godrej, SentrySafe, Yale, Guardall, Falcon, and all commercial and residential digital security vaults."
    },
    {
      question: "What proof of ownership is required to open a digital locker?",
      answer: "Due to high security protocols, we strictly require the customer to present their original CNIC and confirm proof of property occupancy or commercial authorization before opening any safe."
    },
    {
      question: "How long does digital locker unlocking take?",
      answer: "Standard electronic safe unlocking typically takes between 25 to 50 minutes."
    },
    {
      question: "Can you cut a new set of manual override keys for my safe after opening it?",
      answer: "Yes, we can fabricate a set of duplicate override keys so you always have a physical backup if the electronics ever fail again."
    },
    {
      question: "Do you service hotel, bank, and commercial office vaults in Islamabad?",
      answer: "Yes, we provide confidential commercial locksmith services for banks, embassies, hotels, corporate offices, and private residences across Islamabad and Rawalpindi."
    },
    {
      question: "Are your digital safe technicians confidential and discreet?",
      answer: "Yes, customer privacy and asset security are our highest priorities. All services are conducted with absolute confidentiality."
    }
  ]
};

// General FAQ list for the main Services overview page
export const generalServicesFaqs: FAQItem[] = [
  {
    question: "What automotive locksmith services do you provide in Islamabad & Rawalpindi?",
    answer: "Shaheen Locksmith provides complete auto locksmith solutions including smart key programming, push-start key duplication, all-keys-lost recovery, transponder chip coding, car lockout rescue, ignition and door lock repair/replacement, power window repairs, sunroof servicing, and safe unlocking."
  },
  {
    question: "Do you offer mobile roadside service across Islamabad and Rawalpindi?",
    answer: "Yes, we operate fully-equipped mobile locksmith units that travel directly to your location anywhere in Islamabad (F, G, E, H, I sectors, DHA, Bahria Town) and Rawalpindi within 20 to 35 minutes."
  },
  {
    question: "How do your prices compare to authorized car dealerships in Pakistan?",
    answer: "Our services are typically 50% to 70% cheaper than authorized dealerships. Dealerships usually require towing your vehicle and waiting weeks for imported keys, whereas we make and program keys the same day on-site."
  },
  {
    question: "Can you program a car key if all original keys are lost?",
    answer: "Yes, 'All Keys Lost' is our specialty. We can decode your vehicle's lock cylinder, cut a new blade with computerized CNC machines, and pair new smart or transponder keys directly into your car's ECU on-site."
  },
  {
    question: "Which car manufacturers and vehicle models do you support?",
    answer: "We service virtually all makes including Toyota, Honda, Suzuki, KIA, Hyundai, Nissan, Lexus, BMW, Mercedes-Benz, Audi, MG, Changan, Haval, Proton, Mitsubishi, and imported Japanese JDM hybrid vehicles."
  },
  {
    question: "Will programming a new key or repairing my lock damage my car's electronics?",
    answer: "No. We utilize genuine dealer-level diagnostic scanners that communicate via the standard OBD2 port, ensuring your vehicle's factory wiring, ECU, and manufacturer specifications remain completely intact."
  },
  {
    question: "How long does key programming or duplication take?",
    answer: "Key duplication takes 10 to 20 minutes. Smart key programming takes 25 to 45 minutes. An all-keys-lost scenario takes approximately 45 to 60 minutes from arrival to testing."
  },
  {
    question: "What documents must I present before you make a key or unlock my vehicle?",
    answer: "For vehicle security and legal compliance, we require original proof of vehicle ownership (Registration Book or Smart Card) along with the owner's valid CNIC."
  },
  {
    question: "Do you provide emergency lockout service 24/7?",
    answer: "Yes, our emergency rescue team operates 24 hours a day, 7 days a week, 365 days a year for locked-in keys, broken ignitions, and roadside emergencies."
  },
  {
    question: "Do your keys and repair services come with a warranty?",
    answer: "Yes, all smart keys, transponder chips, remote fobs, and mechanical repairs provided by Shaheen Locksmith include a 6-month operational warranty."
  }
];
