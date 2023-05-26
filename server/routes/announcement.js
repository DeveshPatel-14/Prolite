import express from "express";
const router = express.Router();
import Announcement from "../models/Announcement.js"

router.post('/addannouncement', async (req, res) => {
        try {
            const { titles, names, emails, messages } = req.body;
            
            const announcement = new Announcement({
                title: titles, description:messages, creatorName: names,creatorEmail: emails
            })
            const savedAnnouncement = await announcement.save()

            res.json(savedAnnouncement)
            console.log(res);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
export default router;
