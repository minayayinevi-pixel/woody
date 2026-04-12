import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ChevronLeft, CheckCircle2, Circle, ShoppingCart } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { siteData } from '../data/mock';
import { useLanguage } from '../context/LanguageContext';

const questions = [
  // BLOCK A - Basic/Junior Entry (1-6)
  { id: 1, block: 'A', text: 'Sınıf komutlarını anlar ve uygular mı?', examples: 'Stand up, Sit down, Come here, Go there, Raise your hand' },
  { id: 2, block: 'A', text: 'Günlük aksiyonları ve basit cümleleri kullanabilir mi?', examples: 'I draw, I run, I go to school' },
  { id: 3, block: 'A', text: 'Nesneleri, hayvanları, meyve ve sebzeleri tanıyıp isimlendirebilir mi?', examples: 'book, dog, apple, carrot' },
  { id: 4, block: 'A', text: 'Renk, sayı ve sıfatları birlikte doğru kullanabilir mi?', examples: 'red apple, two big balls' },
  { id: 5, block: 'A', text: 'Tercih ve basit sorulara uygun cevap verebilir mi?', examples: 'I like…, What is this?, My name is…' },
  { id: 6, block: 'A', text: 'Günlük yaşam, vücut bakımı ve çevre ifadelerini anlayıp uygulayabilir mi?', examples: 'Wash your hands, It is winter, Go straight' },
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
  basic: { name: 'Basic Level', color: '#2196F3', desc: 'Öğrenci temel seviye İngilizce eğitimine başlamalıdır. Woody Basic Set bu seviye için en uygun settir.', image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/3jgyyil9_1.png' },
  junior: { name: 'Junior Level', color: '#F5C518', desc: 'Öğrenci orta-alt seviye İngilizce eğitimine hazırdır. Woody Junior Set bu seviye için idealdir.', image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/h5x59v59_3.png' },
  senior: { name: 'Senior Level', color: '#E91E90', desc: 'Öğrenci ileri seviye İngilizce eğitimine geçebilir. Woody Senior Set ile süreç daha da güçlenir.', image: 'https://customer-assets.emergentagent.com/job_render-studio-49/artifacts/m4z26p5k_2.png' },
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

  const currentQuestions = questions.filter(q => q.block === currentBlock);
  const blocks = ['A', 'B', 'C'];
  const blockIndex = blocks.indexOf(currentBlock);
  const answered = Object.keys(answers).length;
  const progress = (answered / 18) * 100;

  const handleAnswer = (qId, val) => {
    setAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleNext = () => {
    if (blockIndex < 2) {
      setCurrentBlock(blocks[blockIndex + 1]);
    } else {
      const level = calculateLevel(answers);
      setResult(levelResults[level]);
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
                  Önerilen Seviye
                </div>
                <h1 className="text-[36px] md:text-[48px] font-bold text-gray-900 mb-4" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
                  {result.name}
                </h1>
                <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.8] mb-4">
                  Bu set size uygun!
                </p>
                <p className="text-[15px] text-gray-500 leading-[1.7] mb-8">
                  {result.desc}
                </p>

                {/* Store Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 text-white text-[15px] font-semibold rounded-xl transition-all duration-300 hover:scale-105 no-underline shadow-lg"
                  style={{ backgroundColor: result.color }}
                >
                  <ShoppingCart size={20} />
                  Woody Store'a Git
                </a>

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

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-[4px] sticky top-[72px] z-40">
        <div className="h-full bg-yellow-400 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
      </div>

      <section className="w-full py-10 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          {/* Title */}
          <div className="text-center mb-10">
            <h1 className="text-[32px] md:text-[42px] font-bold text-gray-900 mb-3" style={{ fontFamily: "'Magic English', 'Fredoka', cursive" }}>
              Woody Level Finder
            </h1>
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
              {blockIndex < 2 ? 'Sonraki Blok' : 'Sonucu Gör'}
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
