import CreateEvent from "@/models/CreateEvent";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
const apiKey = process.env.ZOOM_API_KEY;
const apiSecret = process.env.ZOOM_API_SECRET;
const jwt = require("jsonwebtoken");
const axios = require("axios");

// single event get route


const token = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..kJkD96zLQ7zdGML7.2P_XZWBS5QgaX8IZbEM2sRF8jAPN6v4TGop2qs8zH6hlq418-kWxnTq-lf32ZGVPl5p4FG6SQqrw0zN3royPoaRNRRcHI5wQA-nvLKo-DkRkm2Lz-jtvzikC-zN9KM1Ib7MYTYUug5HsGaJp9g29STvdm5ctbNkVJveAe7Tpt8KtT-qrXcjYzoFZzB6-kW4HWNAjJCzeKbmtAitT8TaDcg4Up9QWbRAxiuzGwBqHNiNYbMsEz6lKX4X126w7cDFIJxZ0HcYfkqwryW9rihYWseI-Mqh7JGzTkLZFFZR2Ciy1NQr_qLySYv_PiiXB1iAn2F_nqVd2hJ6NgR57GQJpBQ1UvvAJvo_Al4T48HSRjANWD-0Yg5LLhXIOyinC.JEdG5iRfzBUkahfLwrXRPQ"
// console.log(token)

async function getMeetings() {
  try {
    const response = await axios.get(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function createMeeting(
  topic,
  start_time,
  type,
  duration,
  timezone,
  agenda
) {
  try {
    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic,
        type,
        start_time,
        duration,
        timezone,
        agenda,
        settings: {
          host_video: true,
          participant_video: true,
          join_before_host: true,
          mute_upon_entry: true,
          watermark: true,
          audio: "both",
          auto_recording: "none",
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

// (async()=>
// {
//     const meeting = await createMeeting("Meeting", "2021-11-10T10:00:00", 2, 60, "Asia/Kolkata", "Agenda");
//     const meetings = await getMeetings();
//     console.log(meeting);
//     console.log(meetings);
// }
// )();

export default async function handler(req, res) {
    if (method === "GET") {
        const meetings = await getMeetings();
        console.log(meetings)
        return res.status(200).json(meetings);

    } else if (method === "POST") {
        const { eventTitle, fromDate, toDate, meetingLocation, meetingLink, userName, email, dateAndTimeArray } = req.body;
        const meeting = await createMeeting(eventTitle, fromDate, 2, 60, "Asia/Kolkata", "Agenda");
        const newEvent = new CreateEvent({
        eventTitle,
        fromDate,
        toDate,
        meetingLocation,
        meetingLink,
        eventStatus: "active",
        userName,
        email,
        dateAndTimeArray,
        });
        const event = await newEvent.save();
        console.log(event)
        return res.status(200).json(event);
    } else {
        return res.status(405).json({ message: "Method not allowed" });
    }
    }