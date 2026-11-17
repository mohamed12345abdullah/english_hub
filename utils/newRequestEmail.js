
const newRequestEmail = ({ name, url }) => {

    console.log(name,url);
    
    return `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body style="margin:0;padding:0;background:#f2f8f3;font-family:Arial,Tahoma,sans-serif;direction:rtl;">

        <table width="100%" cellpadding="0" cellspacing="0"
            style="padding:30px 10px;background:#f2f8f3;">
            <tr>
                <td align="center">

                    <table width="100%" cellpadding="0" cellspacing="0"
                        style="max-width:560px;background:#ffffff;border-radius:12px;overflow:hidden;">

                        <!-- Header -->
                        <tr>
                            <td align="center"
                                style="background:#ddf3e5;padding:30px;">

                                <h1 style="color:#246b49;margin:0;font-size:30px;">
                                    زلفة 💚
                                </h1>

                                <p style="color:#47785d;margin:10px 0 0;font-size:14px;">
                                    لأن البدايات الجميلة تستحق الاهتمام
                                </p>

                            </td>
                        </tr>

                        <!-- Content -->
                        <tr>
                            <td style="padding:30px 25px;color:#333333;">

                                <h2 style="color:#246b49;font-size:22px;margin-top:0;">
                                    وصلك طلب زواج جديد! 💚
                                </h2>

                                <p style="font-size:16px;line-height:2;">
                                    أهلًا ${name || 'بك'}،
                                </p>

                                <p style="font-size:16px;line-height:2;">
                                    يسعدنا إخبارك بأنه تم إرسال طلب زواج
                                    جديد إليك من أحد أعضاء منصة زلفة.
                                </p>

                                <p style="font-size:16px;line-height:2;">
                                    يمكنك زيارة المنصة وتسجيل الدخول إلى حسابك
                                    لمراجعة الطلب والتعرف على تفاصيله،
                                    ثم اتخاذ قرارك بقبوله أو رفضه.
                                </p>

                                <!-- Website Button -->
                                <table width="100%" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td align="center" style="padding:25px 0;">

                                            <a href="${url}"
                                                style="display:inline-block;
                                                background:#68b887;
                                                color:#ffffff;
                                                text-decoration:none;
                                                padding:14px 35px;
                                                border-radius:8px;
                                                font-size:16px;
                                                font-weight:bold;">
                                                زيارة منصة زلفة
                                            </a>

                                        </td>
                                    </tr>
                                </table>

                                <p style="font-size:15px;line-height:2;color:#555555;">
                                    نتمنى لك كل التوفيق، ونسأل الله أن يكتب لك الخير.
                                </p>

                            </td>
                        </tr>

                        <!-- Footer -->
                        <tr>
                            <td align="center"
                                style="background:#f2f8f3;padding:20px;color:#64816d;font-size:13px;line-height:2;">

                                مع تحيات فريق زلفة 💚

                                <br>

                                <a href="${url}"
                                    style="color:#246b49;text-decoration:none;">
                                    zolfa.vercel.app
                                </a>

                                <p style="margin-bottom:0;">
                                    هذه رسالة تلقائية، يرجى عدم الرد عليها.
                                </p>

                            </td>
                        </tr>

                    </table>

                </td>
            </tr>
        </table>

    </body>
    </html>
    `;
};

module.exports = newRequestEmail;
