 import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import submissionRoutes from "./routes/submission.js";

import announcementRoutes from "./routes/announcement.js"
import groupmanageRoutes from "./routes/groupmanage.js"
import facultymanageRoutes from "./routes/managefaculty.js"

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import {register} from "./controllers/auth.js";

// data imports
import User from "./models/User.js";
import Announcement from "./models/Announcement.js";
import ManageFaculty from "./models/ManageFaculty.js";

import{ dataUser, messageToAll, messageToAllStat, prjMentor} from "./data/index.js";

/* CONFIGURATION */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true }));
app.use(cors());

app.use("/assets", express.static(path.join(__dirname,'public/assets')));

/*File Storage*/
const storage = multer.diskStorage({
  destination:function(req, file, cb){
    cb(null, "public/assets");
  },
  filename: function(req, file, cb){
    cb(null, file.originalname);
  }
});
const upload = multer({storage});

/*Routes with files */
app.post("auth/register", upload.single("picture"), register);

/* ROUTES */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/submission", submissionRoutes);
app.use("/announcement",announcementRoutes);
app.use("/groupmanage",groupmanageRoutes);
app.use("/managefaculty",facultymanageRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);
    // ProductStat.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    //User.insertMany(dataUser);
    //Announcement.insertMany(messageToAll);
    // ManageFaculty.insertMany(prjMentor);
  })
  .catch((error) => console.log(`${error} did not connect`));
