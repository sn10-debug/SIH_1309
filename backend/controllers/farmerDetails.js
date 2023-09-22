import { collection, addDoc } from "firebase/firestore";

const addFarmerDetails = async (req, res) => {
  const {
    name,
    email,
    address,
    state,
    city,
    pincode,
    contact,
    aadhar,
    pan,
    bank,
    account,
    ifsc,
    password,
  } = req.body;
  try {
    const docRef = await addDoc(collection(database, "farmerDetails"), {
      name: name,
      email: email,
      address: address,
      state: state,
      city: city,
      pincode: pincode,
      contact: contact,
      aadhar: aadhar,
      pan: pan,
      bank: bank,
      account: account,
      ifsccode: ifsc,
      password: password,
    });
    res.status(200).json({ message: "Farmer Details Added Successfully" });
  } catch (e) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getFarmerDetails = async (req, res) => {
  try {
    const farmerDetails = await getDocs(collection(database, "farmerDetails"));
    const farmerDetailsArray = farmerDetails.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).json({ farmerDetailsArray });
  } catch (e) {
    res.status(400).json({ message: "Something went wrong" });
  }
};

const getFarmer = async (req, res) => {
  const { id } = req.params;
  try {
    const farmer = await doc(database, "farmerDetails", id);
    const farmerData = await getDoc(farmer);
    res.status(200).json({ farmerData });
  } catch (e) {
    res.status(400).json({ message: "Something went wrong" });
  }
};
