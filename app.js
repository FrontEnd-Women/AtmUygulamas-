


/* Vücut kitle indeksi hesaplama
let boy=Number(prompt("Boyunuzu giriniz :"));
let kilo=Number(prompt("kilonuzu giriniz :"));
let VKİ=kilo/(boy*boy);

if(VKİ<18.5){
    document.write("İdeal kilonuzunu altındasınız!!!");
}
else if(VKİ>=18.5 && VKİ<=24.9){
    document.write("İdeal kilodasınız..."+ VKİ);
}

else if(VKİ>=25 && VKİ<=29.9){
    document.write("İdeal kilonun üzerindesiniz!!!"+VKİ);
}
else if(VKİ>=30 && VKİ<=39.9){
    document.write("İdeal kilonun çok üzerindesiniz"+VKİ);
}
else if(VKİ>=40){
    document.write("İdeal kilonun çok çok üzerindesiniz!!!"+VKİ);
}
else{
    document.write("hesaplanamadı");
}
*/


/*
let benzin = 52, dizel = 53, lpg = 50;
const yeniSatir = "\r\n";

const yakitmetni = "1 :Dizel" + yeniSatir + "2 :Benzin" + yeniSatir + "3 :LPG" +
    yeniSatir + "Almak istediğiniz yakıtı giriniz";
let yakitTipi = prompt(yakitmetni)

if (yakitTipi == "1" || yakitTipi == "2" || yakitTipi == "3") {
    let yakitLitresi = Number(prompt("Almak istediğiniz litreyi belirtiniz: "));
    let bakiye = Number(prompt("Bakiyenizi Giriniz: "))
    if (yakitTipi == "1") {
        let odenecektutar = dizel * yakitLitresi;
        if (odenecektutar < bakiye) {
            bakiye = odenecektutar - bakiye;
            alert("Yakıt Alma İşlemi Başarılı" + yeniSatir + "Kalan Bakiye :" + "  " + bakiye)
        } else {
            alert("Bakiye yeterli değil" + yeniSatir + "Ödenecek Tutar :" + "  " + odenecektutar + yeniSatir + "Bakiye: " + " " +
                bakiye + "  " + yeniSatir + "Eksik Tutar :" + (odenecektutar - bakiye)
            )
        }
    }

    if (yakitTipi == "2") {
        let odenecektutar = benzin * yakitLitresi;
        if (odenecektutar < bakiye) {
            bakiye = odenecektutar - bakiye;
            alert("Yakıt Alma İşlemi Başarılı" + yeniSatir + "Kalan Bakiye :" + "  " + bakiye)
        } else {
            alert("Bakiye yeterli değil" + yeniSatir + "Ödenecek Tutar :" + "  " + odenecektutar + yeniSatir + "Bakiye: " + " " +
                bakiye + "  " + yeniSatir + "Eksik Tutar :" + (odenecektutar - bakiye)
            )
        }
    }


    if (yakitTipi == "3") {
        let odenecektutar = lpg * yakitLitresi;
        if (odenecektutar < bakiye) {
            bakiye = odenecektutar - bakiye;
            alert("Yakıt Alma İşlemi Başarılı" + yeniSatir + "Kalan Bakiye :" + "  " + bakiye)
        } else {
            alert("Bakiye yeterli değil" + yeniSatir + "Ödenecek Tutar :" + "  " + odenecektutar + yeniSatir + "Bakiye: " + " " +
                bakiye + "  " + yeniSatir + "Eksik Tutar :" + (odenecektutar - bakiye)
            )
        }
    }
}
else {
    alert("Lütfen Geçerli Yakıt Tipi Giriniz..")
}
*/


/*
atm uygulaması

let balance=2000
newLine="\n\r"

let text="1: Bakiye görüntüleme"+newLine+
"2: Para Çekme"+newLine+"3: Para Yatırma"+newLine+"4: Çıkış"+ newLine+ "Lütfen Bir İşlem Seçiniz : "

let choose=prompt(text);
switch(choose){
    case "1":
        document.write("Youre Balance :"+balance)
        break
    case "2":
        let amount=Number(prompt("Çekmek İstediğiniz Tutarı Giriniz :"));
        if(amount<=balance){
            document.write("İşlem Başarılı...")
            balance=balance-amount;
            document.write("Kalan Bakiye :"+balance);
        }else{
            document.write("Yetersiz bakiye ,Geçerli bir tutar Giriniz!!!"+newLine+"Bakiyeniz :"+balance+newLine+"Çekilecek Tutar"+amount);

        }break;
    case "3":
        let AddMoney=Number(prompt("Yatırılacak tutarı giriniz :"));
        balance=balance+AddMoney;
        document.write("Güncel Tutar :"+balance);
        break;
    
    case "4":
        document.write("Sistemden Çıkış Yapılmıştır...");
        break;
    default:
        document.write("Lütfen 1-4 arası sayı giriniz")
        break;

}
*/

let balance = 1000;
const messageBox = document.getElementById("message");

// Mesaj gösterme fonksiyonu
function showMessage(text) {
  messageBox.innerHTML = `<p>${text}</p>`;
}

// Fonksiyonları window objesine ekle
window.showBalance = function() {
  showMessage(`Mevcut bakiyeniz: <strong>${balance} TL</strong>`);
};

window.withdraw = function() {
  let amount = parseFloat(prompt("Çekmek istediğiniz tutarı girin:"));
  if (isNaN(amount) || amount <= 0) {
    showMessage("⚠️ Geçerli bir tutar girin!");
    return;
  }
  if (amount > balance) {
    showMessage("❌ Yetersiz bakiye!");
  } else {
    balance -= amount;
    showMessage(`✅ ${amount} TL çekildi. Yeni bakiye: <strong>${balance} TL</strong>`);
  }
};

window.deposit = function() {
  let amount = parseFloat(prompt("Yatırmak istediğiniz tutarı girin:"));
  if (isNaN(amount) || amount <= 0) {
    showMessage("⚠️ Geçerli bir tutar girin!");
    return;
  }
  balance += amount;
  showMessage(`💰 ${amount} TL yatırıldı. Yeni bakiye: <strong>${balance} TL</strong>`);
};

window.exit = function() {
  showMessage("👋 Görüşmek üzere!");
  document.getElementById("menu").style.display = "none";
};
