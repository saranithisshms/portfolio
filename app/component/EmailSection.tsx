"use client";
import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const data = {
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };
    setEmailSubmitted(true);
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  const handleChange = (e:any,) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        {/* <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div> */}
      </div>
      <div>
        <div className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <TextField
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="jacob@google.com"
              fullWidth
              variant="outlined"
              InputProps={{
                className: "text-white placeholder-white border-white ",
                classes: {
                  notchedOutline: "border-white",
                },
                inputProps: { style: { color: "white" } },
              }}
              InputLabelProps={{
                className: "text-white",
              }}
              style={{ border: "1px solid white" }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <TextField
              name="subject"
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              fullWidth
              placeholder="Just saying hi"
              variant="outlined"
              InputProps={{
                className: "text-white placeholder-white border-white ",
                classes: {
                  notchedOutline: "border-white",
                },
                inputProps: { style: { color: "white" } },
              }}
              InputLabelProps={{
                className: "text-white",
              }}
              style={{ border: "1px solid white" }}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <TextField
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              placeholder="Let's talk about..."
              multiline
              rows={4}
              style={{ border: "1px solid white" }}
              variant="outlined"
              InputProps={{
                className: "text-white placeholder-white border-white",
                classes: {
                  notchedOutline: "border-white",
                },
                inputProps: { style: { color: "white" } },
                //inputProps: { style: { '::selection': { background: 'white', color: 'white' } } }
              }}
              InputLabelProps={{
                className: "text-white",
              }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            className="text-white font-medium py-2.5 px-5 rounded-lg h-12 w-full"
            sx={{
              background: "linear-gradient(to right, #38bdf8, #2563eb)",
            }}
            //onAbort={() => setEmailSubmitted(false)}
            onClick={handleSubmit}
          >
            Send Message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
