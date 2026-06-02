import { NextResponse } from "next/server";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  throw new Error("RESEND_API_KEY is missing");
}

if (!process.env.FROM_EMAIL) {
  throw new Error("FROM_EMAIL is missing");
}

if (!process.env.DIRECTOR_EMAIL) {
  throw new Error("DIRECTOR_EMAIL is missing");
}

const resend = new Resend(process.env.RESEND_API_KEY);

const COMPANY_NAME = "BMRB Research";
const COMPANY_EMAIL = process.env.DIRECTOR_EMAIL!;
const FROM_EMAIL = process.env.FROM_EMAIL!;
const WEBSITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const LOGO_URL = `${WEBSITE_URL}/logo-image.webp`;

export async function POST(req: Request) {
  console.log("CONTACT API HIT");
  try {
    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
    } = await req.json();

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Required fields are missing",
        },
        {
          status: 400,
        }
      );
    }

    // ==========================================
    // LEAD EMAIL TO DIRECTOR
    // ==========================================

    try {
      const directorMail = await resend.emails.send({
        from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
        to: [COMPANY_EMAIL],
        replyTo: email,
        subject: `🔔 New Website Inquiry | ${subject}`,

        html: `
      <!DOCTYPE html>
      <html>
      <body style="
        margin:0;
        padding:0;
        background:#f8fafc;
        font-family:Arial,sans-serif;
      ">

        <div style="
          max-width:750px;
          margin:40px auto;
          background:#ffffff;
          border-radius:20px;
          overflow:hidden;
          box-shadow:0 10px 40px rgba(0,0,0,.08);
        ">

          <div style="
            background:linear-gradient(135deg,#0f172a,#1e40af);
            padding:35px;
            text-align:center;
          ">
            <img
              src="${LOGO_URL}"
              alt="BMRB Research"
              width="220"
              style="max-width:220px;"
            />
          </div>

          <div style="padding:35px;">

            <h2 style="
              margin-top:0;
              color:#0f172a;
            ">
              New Lead Received
            </h2>

            <p style="
              color:#64748b;
              margin-bottom:30px;
            ">
              A new inquiry has been submitted through the website.
            </p>

            <table
              width="100%"
              cellspacing="0"
              cellpadding="12"
              style="
                border-collapse:collapse;
                border:1px solid #e2e8f0;
                border-radius:12px;
                overflow:hidden;
              "
            >

              <tr style="background:#f8fafc;">
                <td><strong>Name</strong></td>
                <td>${name}</td>
              </tr>

              <tr>
                <td><strong>Email</strong></td>
                <td>
                  <a href="mailto:${email}">
                    ${email}
                  </a>
                </td>
              </tr>

              <tr style="background:#f8fafc;">
                <td><strong>Phone</strong></td>
                <td>${phone}</td>
              </tr>

              <tr>
                <td><strong>Company</strong></td>
                <td>${company || "Not Provided"}</td>
              </tr>

              <tr style="background:#f8fafc;">
                <td><strong>Subject</strong></td>
                <td>${subject}</td>
              </tr>

            </table>

            <div style="
              margin-top:25px;
              padding:24px;
              background:#eff6ff;
              border-left:5px solid #2563eb;
              border-radius:12px;
            ">
              <h3 style="
                margin-top:0;
                color:#1d4ed8;
              ">
                Message
              </h3>

              <p style="
                margin:0;
                line-height:1.8;
                color:#334155;
              ">
                ${message.replace(/\n/g, "<br/>")}
              </p>
            </div>

            <div style="
              margin-top:30px;
              text-align:center;
            ">
              <a
                href="mailto:${email}"
                style="
                  display:inline-block;
                  background:#2563eb;
                  color:white;
                  text-decoration:none;
                  padding:14px 24px;
                  border-radius:12px;
                  font-weight:600;
                "
              >
                Reply to Lead
              </a>
            </div>

          </div>

        </div>

      </body>
      </html>
      `,
      });
      
      console.log("Director Email Response:", directorMail);

      if (directorMail.error) {
        console.error("Director Email Error:", directorMail.error);
        // Continue to send customer email even if director email fails
        console.warn("Continuing to send customer email despite director email failure");
      }
    } catch (directorError) {
      console.error("Director email sending failed:", directorError);
      // Continue to send customer email
    }

    // ==========================================
    // THANK YOU EMAIL TO CUSTOMER
    // ==========================================

    try {
      const customerMail = await resend.emails.send({
        from: `${COMPANY_NAME} <${FROM_EMAIL}>`,
        to: [email],
        replyTo: COMPANY_EMAIL,
        subject: "Thank You for Contacting BMRB Research",

        html: `
      <!DOCTYPE html>
      <html>
      <body style="
        margin:0;
        padding:0;
        background:#f8fafc;
        font-family:Arial,sans-serif;
      ">

        <div style="
          max-width:750px;
          margin:40px auto;
          background:white;
          border-radius:24px;
          overflow:hidden;
          box-shadow:0 10px 40px rgba(0,0,0,.08);
        ">

          <div style="
            background:linear-gradient(135deg,#0f172a,#1e40af);
            text-align:center;
            padding:55px 30px;
          ">
            <img
              src="${LOGO_URL}"
              alt="BMRB Research"
              width="220"
              style="max-width:220px;"
            />
          </div>

          <div style="padding:45px;">

            <div style="text-align:center;">
              <div
                style="
                  width:80px;
                  height:80px;
                  line-height:80px;
                  margin:auto;
                  border-radius:50%;
                  background:#dcfce7;
                  color:#16a34a;
                  font-size:42px;
                  font-weight:bold;
                "
              >
                ✓
              </div>
            </div>

            <h1 style="
              text-align:center;
              color:#0f172a;
              margin-top:25px;
            ">
              Thank You, ${name}
            </h1>

            <p style="
              text-align:center;
              color:#64748b;
              line-height:1.8;
              font-size:16px;
            ">
              We appreciate your interest in BMRB Research.
              Your inquiry has been successfully received and
              our team will review it shortly.
            </p>

            <div style="
              background:#f8fafc;
              border:1px solid #e2e8f0;
              border-radius:16px;
              padding:24px;
              margin:30px 0;
            ">

              <h3 style="
                margin-top:0;
                color:#0f172a;
              ">
                Inquiry Summary
              </h3>

              <p>
                <strong>Subject:</strong> ${subject}
              </p>

              <p>
                <strong>Email:</strong> ${email}
              </p>

              <p>
                <strong>Phone:</strong> ${phone}
              </p>

            </div>

            <div style="
              background:#eff6ff;
              border-radius:16px;
              padding:25px;
            ">
              <h3 style="
                margin-top:0;
                color:#1d4ed8;
              ">
                What Happens Next?
              </h3>

              <ul style="
                margin:0;
                padding-left:20px;
                color:#334155;
                line-height:2;
              ">
                <li>Your inquiry is being reviewed by our team.</li>
                <li>We will assess your requirements carefully.</li>
                <li>You can expect a response within 24 business hours.</li>
              </ul>
            </div>

            <div style="
              text-align:center;
              margin-top:35px;
            ">

              <a
                href="${WEBSITE_URL}"
                style="
                  display:inline-block;
                  background:#2563eb;
                  color:white;
                  text-decoration:none;
                  padding:14px 28px;
                  border-radius:12px;
                  font-weight:600;
                "
              >
                Visit Website
              </a>

            </div>

          </div>

          <div style="
            background:#0f172a;
            color:#cbd5e1;
            text-align:center;
            padding:25px;
            font-size:13px;
          ">
            © ${new Date().getFullYear()} BMRB Research.
            All Rights Reserved.
          </div>

        </div>

      </body>
      </html>
      `,
      });

      console.log("Customer Email Response:");
      console.dir(customerMail, { depth: null });

      if (customerMail.error) {
        console.error("Customer Email Error:");
        console.dir(customerMail.error, { depth: null });
        
        // Still return success if only customer email fails? No, customer email is important
        return NextResponse.json(
          {
            success: false,
            message: "Failed to send confirmation email. Please try again later.",
          },
          {
            status: 500,
          }
        );
      }
    } catch (customerError) {
      console.error("Customer email sending failed:", customerError);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send confirmation email. Please try again later.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error: any) {
    console.error("CONTACT FORM ERROR:");
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to send message",
      },
      {
        status: 500,
      }
    );
  }
}