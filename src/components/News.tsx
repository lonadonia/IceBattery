import { Clock } from 'lucide-react';

const newsItems = [
  {
    title: 'IceBattery Featured in Chemical Daily Newspaper!',
    date: 'April 3, 2025',
    excerpt: 'We are thrilled to announce that IceBattery has been featured...',
    image: 'https://icebattery.jp/wp-content/uploads/2025/04/%E5%8C%96%E5%AD%A6%E5%B7%A5%E6%A5%AD%E6%97%A5%E5%A0%B1-The-chemical-Daily-newspaper-01-600x568.jpg',
  },
  {
    title: 'The foundation of Indian Healthcare',
    date: 'January 15, 2025',
    excerpt: "India's healthcare system is a powerful blend of ancient wisdom...",
    image: 'https://icebattery.jp/wp-content/uploads/2025/01/The-foundation-of-Indian-Healthcare.jpg',
  },
  {
    title: "The revolutionary palm cooling 'IceBattery Fresh® AVA' combats Japan's heat wave",
    date: 'August 15, 2024',
    excerpt: 'アイ・ティ・イー株式会社(以下ITE) (本社: 東京都、代表取締役社長: パンカジ・ガルグ) は、猛暑対策に効果的な製品『IceBattery Fresh® AVA』の発売を開始します。昨今、地球温暖化の影響がますます拡大し、今夏は過去10年を上回る暑さと言われています。そんな世界中で熱中症による健康被害や死亡者数が急増する中、喫緊の課題への対応策として、ITEは手のひら用の高機能アイシング『IceBattery Fresh® AVA』を販売いたします。Amazon製品サイトや、お取引先様オンラインショップページを通じ、手軽に『IceBattery Fresh® AVA』をお求めいただけます。 ■ポーチとセットで最大6時間の保冷を持続!...',
    image: 'https://icebattery.jp/wp-content/uploads/2024/07/Press-release-banner-03-768x404.png',
  },
  {
    title: 'Japan “SDG Journal” Features ITE CEO’s Sustainability Efforts',
    date: 'July 22, 2024',
    excerpt: 'Spotlight on Pankaj Garg Our founder, Pankaj Garg, has an...',
    image: 'https://icebattery.jp/wp-content/uploads/2024/07/SDG-Journal-768x249.png',
  }
];

export default function News() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-display font-bold text-[28px] md:text-[32px] text-primary-green mb-8">
          Latest News & Topics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {newsItems.map((item, index) => (
            <article 
              key={index} 
              className="bg-white border border-gray-200 flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden border-b border-gray-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-5 flex flex-col">
                <h4 className="font-display font-bold text-[16px] text-primary-green mb-2 leading-snug">
                  {item.title}
                </h4>
                <div className="flex items-center gap-1.5 text-gray-400 mb-3">
                  <Clock size={14} />
                  <time className="font-body text-[12px]">
                    {item.date}
                  </time>
                </div>
                <p className="font-body text-[14px] text-gray-700 leading-relaxed mb-4 whitespace-pre-line">
                  {item.excerpt}
                </p>
                <div className="text-primary-green font-body text-[13px] font-medium mt-auto cursor-pointer hover:underline">
                  Read More
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
