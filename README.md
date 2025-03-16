# CourseApp

Modern React uygulaması ile geliştirilmiş kurs listeleme projesi.

## Özellikler

- Modern kart tasarımı
- Duyarlı (responsive) grid düzeni
- Kurs bilgilerinin görsel ile gösterimi
- Fiyat ve değerlendirme bilgileri
- Hover efektleri ve yumuşak animasyonlar

## Kullanılan Teknolojiler

- React
- CSS3 (Grid, Flexbox)
- JavaScript ES6+

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/ladrons/CourseApp.git
```

2. Proje dizinine gidin:
```bash
cd CourseApp
```

3. Bağımlılıkları yükleyin:
```bash
npm install
```

4. Geliştirme sunucusunu başlatın:
```bash
npm start
```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın

## Proje Yapısı

```
src/
├── App.jsx           # Ana uygulama bileşeni
├── App.css           # Ana uygulama stilleri
├── Header.jsx        # Başlık bileşeni
├── Course.jsx        # Kurs kartı bileşeni
├── Data.jsx          # Kurs verileri
├── css/
│   ├── Header.css    # Başlık bileşeni stilleri
│   └── Course.css    # Kurs bileşeni stilleri
└── index.css         # Global stiller
```