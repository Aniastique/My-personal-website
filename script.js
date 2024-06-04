document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}
setInterval(updateClock, 1000);
updateClock();

// استهداف النموذج والحقول
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

// إضافة حدث استماع للنموذج عند الإرسال
contactForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // منع الإرسال الافتراضي للنموذج

  // جمع قيم الحقول
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // قم بإرسال البريد الإلكتروني باستخدام خدمة مثل Email.js
  try {
    await emailjs.send('service_0wayv4x', 'template_a15iays', {
      to_email: 'aniastique@gmail.com',
      from_name: name,
      from_email: email,
      message: message,
    });
    alert('تم إرسال الرسالة بنجاح! شكرًا لك.');
    // يمكنك إعادة توجيه المستخدم إلى صفحة تأكيد أو تنظيف الحقول هنا
  } catch (error) {
    console.error('حدث خطأ أثناء إرسال البريد الإلكتروني:', error);
    alert('حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.');
  }
});
