function sendMessage() {
    const whatsappNumber = "5511994730976";
    const text = "Olá, estou interessado(a) no serviço.";
    const url = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
    
    window.open(url, "_blank");
  }