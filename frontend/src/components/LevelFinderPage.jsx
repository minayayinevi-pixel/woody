import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, CheckCircle2, Circle, ShoppingCart } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const questions = [
  // BLOCK A - Basic Level (1-6)
  { id: 1, block: 'A', text: 'Sınıf komutlarını anlar ve uygular mı?', examples: 'Stand up, Sit down, Raise your hand, Come here, Go there' },
  { id: 2, block: 'A', text: 'Nesneleri, hayvanları ve meyve-sebzeleri tanıyıp isimlendirebilir mi?', examples: 'book, dog, apple, carrot vb.' },
  { id: 3, block: 'A', text: 'Renkleri ve sayıları doğru tanıyıp eşleştirebilir mi?', examples: 'red, blue / one, two vb.' },
  { id: 4, block: 'A', text: 'Araçları ve kıyafetleri tanıyıp doğru seçebilir mi?', examples: 'car, bus / t-shirt, shoes vb.' },
  { id: 5, block: 'A', text: '"What is this?" sorusuna doğru cevap verebilir mi?', examples: 'It is a …' },
  { id: 6, block: 'A', text: 'Vücut bölümlerini tanıyıp gösterebilir mi?', examples: 'head, eyes, nose, arm vb.' },
  // BLOCK B - Junior Level (7-12)
  { id: 7, block: 'B', text: 'Günlük aksiyonları ifade edebilir mi?', examples: 'I draw, I run, I go to school, I eat' },
  { id: 8, block: 'B', text: 'Oda, oyuncak ve nesneleri tanıyıp cümle kurabilir mi?', examples: 'This is a…, These are…' },
  { id: 9, block: 'B', text: 'Renk, sayı ve sıfatları birlikte kullanabilir mi?', examples: 'red apple, two big balls' },
  { id: 10, block: 'B', text: 'Yiyecekler hakkında tercih belirtir mi?', examples: 'I like…, I don\'t like…' },
  { id: 11, block: 'B', text: 'Vücut bakımı ile ilgili ifadeleri anlayıp uygular mı?', examples: 'Wash your hands, Brush your teeth' },
  { id: 12, block: 'B', text: 'Sokak, binalar ve yön ifadelerini anlayıp kullanabilir mi?', examples: 'school, hospital, park / Go straight, Turn left/right' },
  // BLOCK C - Senior Level (13-18)
  { id: 13, block: 'C', text: 'Günlük rutinleri cümle ile ifade edebilir mi?', examples: 'I wake up, I brush my teeth, I go to school' },
  { id: 14, block: 'C', text: 'Gün, zaman ve etkinlikleri birlikte ifade edebilir mi?', examples: 'It is 9 o\'clock, I go to sleep' },
  { id: 15, block: 'C', text: 'Meslekleri ve çalışma yerlerini birlikte söyleyebilir mi?', examples: 'He is a doctor, He works in a hospital' },
  { id: 16, block: 'C', text: 'Hava durumu ve duyguyu birlikte ifade edebilir mi?', examples: 'It is rainy and I feel sad' },
  { id: 17, block: 'C', text: 'Yapabildiği ve yapamadığı eylemleri ifade edebilir mi?', examples: 'I can swim, I can\'t fly' },
  { id: 18, block: 'C', text: 'İstek, tercih ve ihtiyaçlarını cümle ile ifade edebilir mi?', examples: 'I want pizza, I don\'t want milk, I\'m hungry' },
];

const blockLabels = {
  A: { name: 'Temel Seviye', color: '#2196F3', icon: '🔵' },
  B: { name: 'Junior Seviye', color: '#F5C518', icon: '🟡' },
  C: { name: 'Senior Seviye', color: '#E91E90', icon: '🔴' },
};

const levelResults = {
  basic: { 
    name: 'Basic Level', 
    color: '#2196F3', 
    title: 'Bu ürünü almanız gerekir',
    desc: 'Öğrenci temel seviye İngilizce eğitimine başlamalıdır. Woody Basic Set bu seviye için en uygun settir.', 
    image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png' 
  },
  junior: { 
    name: 'Junior Level', 
    color: '#F5C518', 
    title: 'Bu sizin için uygun',
    desc: 'Öğrenci orta-alt seviye İngilizce eğitimine hazırdır. Woody Junior Set bu seviye için idealdir.', 
    image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png' 
  },
  senior: { 
    name: 'Senior Level', 
    color: '#E91E90', 
    title: 'Bu sizin için uygun',
    desc: 'Öğrenci ileri seviye İngilizce eğitimine geçebilir. Woody Senior Set ile süreç daha da güçlenir.', 
    image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png' 
  },
};

function calculateLevel(answers) {
  const blockA = questions.filter(q => q.block === 'A').reduce((sum, q) => sum + (answers[q.id] === true ? 1 : 0), 0);
  const blockB = questions.filter(q => q.block === 'B').reduce((sum, q) => sum + (answers[q.id] === true ? 1 : 0), 0);
  const blockC = questions.filter(q => q.block === 'C').reduce((sum, q) => sum + (answers[q.id] === true ? 1 : 0), 0);

  // Rule 1: A block < 3 → BASIC
  if (blockA < 3) return 'basic';
  // Rule 2: A ≥ 3 but B < 3 → JUNIOR (başlangıç)
  if (blockA >= 3 && blockB < 3) return 'junior';
  // Rule 4: C block ≥ 4 → SENIOR
  if (blockC >= 4) return 'senior';
  // Rule 3: A + B ≥ 8 → JUNIOR (tam)
  if (blockA + blockB >= 8) return 'junior';
  // Default
  return 'junior';
}

const LevelFinderPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [answers, setAnswers] = useState({});
  const [currentBlock, setCurrentBlock] = useState('A');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [showTransition, setShowTransition] = useState(false);
  const [transitionMessage, setTransitionMessage] = useState('');

  const currentQuestions = questions.filter(q => q.block === currentBlock);
  const blocks = ['A', 'B', 'C'];
  const blockIndex = blocks.indexOf(currentBlock);
  const answered = Object.keys(answers).length;
  const progress = (answered / 18) * 100;

  const handleAnswer = (qId, val) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleNext = () => {
    // Count YES answers in current block
    const currentBlockQuestions = questions.filter(q => q.block === currentBlock);
    const yesCount = currentBlockQuestions.reduce((sum, q) => sum + (answers[q.id] === true ? 1 : 0), 0);

    // A Block finished
    if (currentBlock === 'A') {
      if (yesCount >= 4) {
        // Go to Junior level (B block)
        setTransitionMessage('🎉 Junior seviyeye geçiyoruz!');
        setShowTransition(true);
        setTimeout(() => {
          setShowTransition(false);
          setCurrentBlock('B');
        }, 2000);
      } else {
        // Stay at Basic level - show result
        setResult(levelResults.basic);
        setShowResult(true);
      }
    }
    // B Block finished
    else if (currentBlock === 'B') {
      if (yesCount >= 4) {
        // Go to Senior level (C block)
        setTransitionMessage('🎉 Senior seviyeye geçiyoruz!');
        setShowTransition(true);
        setTimeout(() => {
          setShowTransition(false);
          setCurrentBlock('C');
        }, 2000);
      } else {
        // Stay at Junior level - show result
        setResult(levelResults.junior);
        setShowResult(true);
      }
    }
    // C Block finished
    else if (currentBlock === 'C') {
      // Always show Senior result
      setResult(levelResults.senior);
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (blockIndex > 0) setCurrentBlock(blocks[blockIndex - 1]);
  };

  const allBlockAnswered = currentQuestions.every(q => answers[q.id] !== undefined);

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-white">
        <Header data={siteData.header} />
        <div className="pt-[72px]" />

        <section className="w-full py-16 md:py-24">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Result Image */}
              <div className="w-full md:w-[40%]">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img src={result.image} alt={result.name} className="w-full object-contain" />
                </div>
              </div>

              {/* Result Text */}
              <div className="w-full md:w-[60%] text-center md:text-left">
                <div className="inline-block px-4 py-1.5 rounded-full text-[13px] font-bold text-white mb-5" style={{ backgroundColor: result.color }}>
                  {result.title}
                </div>
                <h1 className="text-[36px] md:text-[48px] font-bold text-gray-900 mb-4" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
                  {result.name}
                </h1>
                <p className="text-[15px] text-gray-500 leading-[1.7] mb-8">
                  {result.desc}
                </p>

                {/* Online Sales Box */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-xl p-6 mb-6 shadow-md">
                  <h3 className="text-[18px] font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <ShoppingCart size={22} className="text-yellow-600" />
                    Online Satış
                  </h3>
                  <p className="text-[14px] text-gray-600 mb-4">
                    Bu seti hemen online olarak sipariş edebilirsiniz!
                  </p>
                  <a
                    href="https://wa.me/905331570373?text=Merhaba%2C%20Woody%20Level%20Finder%20testini%20tamamladım%20ve%20%2A{result.name}%2A%20önerildi.%20Ürün%20hakkında%20bilgi%20almak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-green-500 text-white text-[15px] font-semibold rounded-xl transition-all duration-300 hover:bg-green-600 hover:scale-105 no-underline shadow-lg"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp ile Sipariş Ver
                  </a>
                </div>

                <button
                  onClick={() => { setShowResult(false); setResult(null); setAnswers({}); setCurrentBlock('A'); }}
                  className="block mt-4 text-[14px] text-gray-500 hover:text-gray-700 bg-transparent border-none cursor-pointer underline mx-auto md:mx-0"
                >
                  Testi tekrarla
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer data={siteData.footer} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header data={siteData.header} />
      <div className="pt-[72px]" />

      {/* Transition Message Overlay */}
      {showTransition && (
        <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white rounded-3xl px-12 py-10 shadow-2xl max-w-md mx-4 text-center animate-bounce">
            <div className="text-[48px] mb-4">🎉</div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-gray-900 mb-3" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
              {transitionMessage}
            </h2>
            <p className="text-[15px] text-gray-500">Yükleniyor...</p>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-[4px] sticky top-[72px] z-40">
        <div className="h-full bg-yellow-400 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <section className="w-full py-10 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          
          {/* Intro Section - Title + Description */}
          <div className="text-center mb-16" style={{ paddingTop: '80px' }}>
            {/* Main Title */}
            <h1 className="text-[32px] md:text-[42px] lg:text-[48px] font-bold text-[#0B1F3A] leading-tight mb-5">
              Hangi Woody Set Sizin İçin Uygun?
            </h1>
            
            {/* Optional Yellow Underline */}
            <div className="w-[80px] h-[3px] bg-[#FFB800] mx-auto mb-5"></div>
            
            {/* Description */}
            <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed max-w-[700px] mx-auto" style={{ marginBottom: '60px' }}>
              Kurumunuza veya kullanım alanınıza en uygun Woody setini seçin. Her set, farklı ihtiyaçlara göre özel olarak yapılandırılmıştır.
            </p>
          </div>

          {/* Title */}
          <div className="text-center mb-10">
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 mb-3" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
              Woody Level Finder
            </h2>
            <p className="text-[15px] text-gray-500">Öğrencinin seviyesini belirlemek için aşağıdaki soruları yanıtlayın.</p>
          </div>

          {/* Block Navigation */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {blocks.map((b, i) => (
              <div key={b} className="flex items-center gap-3">
                <button
                  onClick={() => setCurrentBlock(b)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-300 border-none cursor-pointer ${
                    currentBlock === b
                      ? 'text-white shadow-md'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                  style={currentBlock === b ? { backgroundColor: blockLabels[b].color } : {}}
                >
                  <span>{blockLabels[b].icon}</span>
                  <span className="hidden sm:inline">{blockLabels[b].name}</span>
                  <span className="sm:hidden">Blok {b}</span>
                </button>
                {i < 2 && <div className="w-6 h-[2px] bg-gray-200" />}
              </div>
            ))}
          </div>

          {/* Questions */}
          <div className="space-y-0">
            {currentQuestions.map((q, idx) => (
              <div key={q.id} className="py-7 border-b border-gray-100 last:border-b-0">
                <div className="flex items-start gap-4">
                  <span className="text-[14px] font-bold text-gray-300 mt-0.5 w-6 flex-shrink-0">{q.id}.</span>
                  <div className="flex-1">
                    <p className="text-[16px] md:text-[17px] text-gray-800 font-medium leading-relaxed mb-2">
                      {q.text}
                    </p>
                    <p className="text-[13px] text-gray-400 italic mb-5">
                      ({q.examples})
                    </p>

                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => handleAnswer(q.id, true)}
                        className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-300 border-2 cursor-pointer ${
                          answers[q.id] === true
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {answers[q.id] === true ? <CheckCircle2 size={18} className="text-green-500" /> : <Circle size={18} className="text-gray-300" />}
                        Evet
                      </button>
                      <button
                        onClick={() => handleAnswer(q.id, false)}
                        className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-300 border-2 cursor-pointer ${
                          answers[q.id] === false
                            ? 'border-red-400 bg-red-50 text-red-600'
                            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                        }`}
                      >
                        {answers[q.id] === false ? <CheckCircle2 size={18} className="text-red-400" /> : <Circle size={18} className="text-gray-300" />}
                        Hayır
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
            <button
              onClick={handlePrev}
              disabled={blockIndex === 0}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-[14px] font-semibold transition-all duration-300 border-none cursor-pointer ${
                blockIndex === 0 ? 'bg-gray-100 text-gray-300 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <ChevronLeft size={18} />
              Önceki Blok
            </button>

            <span className="text-[13px] text-gray-400">{answered}/18 yanıtlandı</span>

            <button
              onClick={handleNext}
              disabled={!allBlockAnswered}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold transition-all duration-300 border-none cursor-pointer ${
                allBlockAnswered
                  ? 'text-white shadow-md hover:scale-105'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
              style={allBlockAnswered ? { backgroundColor: blockLabels[currentBlock].color } : {}}
            >
              {currentBlock === 'A' ? 'Değerlendir' : currentBlock === 'B' ? 'Değerlendir' : 'Sonucu Gör'}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer data={siteData.footer} />
    </div>
  );
};

export default LevelFinderPage;
