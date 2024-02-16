# V2Ray Worker
 Total solution for v2ray configs over Cloudflare's worker

[نسخه فارسی](https://github.com/sma-abyar/v2ray-worker/blob/main/README-fa.md)

## How to use

To be completed...

## Deploy 

ابتدا این Reop را فورک کنید.وارد اکانت کلادفلر خودتون بشید و اگر اکانت ندارید، حتما یک اکانت بسازید و آن را وریفای کنید. سپس در بخش KV، یک KV بسازید با نام `settings` و سپس آیدی آن را کپی کنید. به Repo فورک شده‌ی خودتون برید و درون فایل wrangler.toml، مقدار `KV_ID` رو تغییر بدین و آیدی کپی شده رو جایگزین کنین. حالا تغییرات رو ذخیره کنین و برگردین به صفحه‌ی اصلی. گزینه‌ی Deploy رو بزنین و مطابق مراحل گفته شده درون راهنمای Deploy جلو برین. بعد از اینکه Deploy انجام شد، می‌تونین برگردین به کلادفلر، وارد بخش worker بشین، یک ورکر برای شما ساخته شده، اونو باز کنین و از طریق لینکی که بالاش هست، وارد پنل بشین. پنل خودتون رو تنظیم کنین و بعدش لینک sub رو کپی کنین و داخل نرم افزار بندازین.


 1. Fork this Repo and enable Github Action
 2. Open CloudFlare and create KV namespace with name `settings` then copy the ID
 3. Go to this forked repo and set secrets with name `KV_NAME` and fill with KV settings ID
 4. Edit this `README.md` file, then find and replace this button url bellow with yours `https://github.com/USER/REPO_NAME` then save it.
 4. then press `Deploy With Workers` and follow the instruction

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/vfarid/v2ray-worker)

### Credits
Built-in vless config generator is based on [Zizifn Edge Tunnel](https://github.com/zizifn/edgetunnel), re-written using Typescript.
