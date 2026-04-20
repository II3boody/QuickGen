# تنفيذ عملية إنشاء الملف بصيغة Markdown
readme_content = """# Quick Gen - منصة تعليم الذكاء الاصطناعي 🚀

**Quick Gen** هي منصة تعليمية متطورة تهدف إلى تمكين المستخدمين من أدوات الذكاء الاصطناعي في مجالات البرمجة، التصميم، والعمل الحر، من خلال مسارات تعليمية تطبيقية وكورسات محدثة.

## 🌟 المميزات الرئيسية
- **نظام مسارات تعليمية (Learning Paths):** مسارات منظمة تأخذك من الصفر حتى الاحتراف.
- **تكامل مع API خارجي:** جلب البيانات (الكورسات والمسارات) بشكل ديناميكي من السيرفر.
- **نظام تسجيل دخول (Authentication):** إمكانية إنشاء حساب وتسجيل الدخول باستخدام `localStorage` و `sessionStorage`.
- **واجهة مستخدم متجاوبة (Responsive UI):** تصميم عصري يدعم جميع الشاشات مع نظام Navbar ذكي (Dynamic Island style).
- **عرض تفاعلي:** استخدام مكتبة `Swiper.js` لعرض قصص النجاح والعلامات التجارية.

## 🛠 التكنولوجيات المستخدمة
- **Frontend:** HTML5, CSS3, JavaScript (ES6+).
- **Libraries:** - [jQuery](https://jquery.com/) (للتحكم في الـ DOM والأنيميشن).
  - [Bootstrap 5](https://getbootstrap.com/) (للتنسيق المتجاوب ونظام الشبكة).
  - [Swiper.js](https://swiperjs.com/) (للسلايدرز التفاعلية).
  - [FontAwesome](https://fontawesome.com/) (للأيقونات).
- **Backend API:** ASP.NET Core (استهلاك البيانات عبر Fetch API).

## 📂 هيكلة المشروع
```text
├── assets/             # الصور والملفات الوسائطية
├── css/
│   └── style.css       # التنسيقات الخاصة بالمشروع
├── js/
│   └── main.js         # المنطق البرمجي والربط مع الـ API
├── index.html          # الصفحة الرئيسية
├── Educational.html    # صفحة المسارات التعليمية
├── courses.html        # صفحة جميع الكورسات
├── sign-in.html        # صفحة تسجيل الدخول
└── sign-up.html        # صفحة إنشاء حساب

## 📂 UI & UX FIGMA : https://www.figma.com/design/HQZENSD69KBo2egU6jj2Zi/IEEE-Competition?node-id=2-4&t=lkyaOjiCtXbyFiAi-1
