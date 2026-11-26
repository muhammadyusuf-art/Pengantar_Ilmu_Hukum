const modules = [
    {
        id: "hakim",
        shortTitle: "1. Hakim",
        icon: "⚖️",
        title: "Hakim (Majelis Hakim)",
        subtitle: "Pemimpin Persidangan & Pemutus Perkara",
        seatId: "seat-hakim",
        description: "Hakim adalah pejabat peradilan negara yang diberi wewenang oleh undang-undang untuk mengadili. Dalam sidang pidana biasa, persidangan dipimpin oleh Majelis Hakim yang terdiri dari 1 Hakim Ketua dan 2 Hakim Anggota.",
        legalBasis: "Pasal 1 butir 8 KUHAP & UU No. 48 Tahun 2009 tentang Kekuasaan Kehakiman.",
        duties: [
            "Memimpin jalannya persidangan agar tertib dan sesuai hukum acara.",
            "Menggali fakta hukum dari keterangan saksi, ahli, terdakwa, dan alat bukti.",
            "Menjaga imparsialitas (tidak memihak jaksa maupun terdakwa).",
            "Menjatuhkan putusan (vonis) berdasarkan minimal 2 alat bukti yang sah dan keyakinan hakim (Pasal 183 KUHAP)."
        ],
        keyNote: "Hakim bersifat pasif dalam mencari perkara (menunggu dakwaan Jaksa), namun aktif dalam memeriksa fakta di persidangan."
    },
    {
        id: "jaksa",
        shortTitle: "2. Jaksa",
        icon: "🏛️",
        title: "Jaksa Penuntut Umum (JPU)",
        subtitle: "Wakil Negara dalam Penuntutan",
        seatId: "seat-jaksa",
        description: "Jaksa adalah pejabat fungsional yang diberi wewenang oleh undang-undang untuk bertindak sebagai penuntut umum dan pelaksana putusan pengadilan yang telah memperoleh kekuatan hukum tetap (inkracht).",
        legalBasis: "Pasal 1 butir 6 KUHAP & UU No. 11 Tahun 2021 tentang Kejaksaan RI.",
        duties: [
            "Menyusun Surat Dakwaan sebagai dasar pemeriksaan di pengadilan.",
            "Membuktikan kesalahan terdakwa di depan persidangan dengan menghadirkan saksi dan barang bukti.",
            "Mengajukan Surat Tuntutan (Requisitoir) yang berisi permohonan jenis dan lama pidana.",
            "Mengeksekusi putusan hakim setelah perkara berkekuatan hukum tetap."
        ],
        keyNote: "Dalam perkara pidana, Jaksa mewakili kepentingan negara dan masyarakat umum, bukan sekadar mewakili korban secara pribadi."
    },
    {
        id: "pengacara",
        shortTitle: "3. Pengacara",
        icon: "🛡️",
        title: "Penasihat Hukum (Advokat)",
        subtitle: "Pembela Hak Hukum Terdakwa",
        seatId: "seat-pengacara",
        description: "Penasihat Hukum atau Advokat adalah seseorang yang memenuhi syarat yang ditentukan oleh undang-undang untuk memberi bantuan hukum kepada tersangka atau terdakwa di dalam maupun di luar pengadilan.",
        legalBasis: "Pasal 1 butir 13, Pasal 54-56 KUHAP & UU No. 18 Tahun 2003 tentang Advokat.",
        duties: [
            "Mendampingi terdakwa pada setiap tingkat pemeriksaan guna mencegah pelanggaran HAM.",
            "Mengajukan keberatan (Eksepsi) terhadap surat dakwaan Jaksa jika dinilai cacat hukum.",
            "Mengajukan saksi atau ahli yang meringankan terdakwa (saksi a de charge).",
            "Menyusun Nota Pembelaan (Pledoi) untuk membantah tuntutan Jaksa."
        ],
        keyNote: "Advokat bertugas memastikan proses hukum berjalan adil (due process of law), bukan membenarkan tindak kejahatan."
    },
    {
        id: "panitera",
        shortTitle: "4. Panitera",
        icon: "📜",
        title: "Panitera / Panitera Pengganti",
        subtitle: "Pencatat Otentik Jalannya Persidangan",
        seatId: "seat-panitera",
        description: "Panitera adalah pejabat pengadilan yang membantu hakim dalam hal administrasi persidangan dan bertanggung jawab mencatat seluruh peristiwa yang terjadi selama sidang berlangsung.",
        legalBasis: "Pasal 202 KUHAP & UU Peradilan Umum.",
        duties: [
            "Mencatat seluruh jalannya persidangan secara akurat ke dalam Berita Acara Sidang (BAS).",
            "Membantu Hakim dalam menyiapkan berkas perkara dan jadwal sidang.",
            "Menandatangani Berita Acara Sidang bersama Hakim Ketua.",
            "Menjaga keaslian dokumen dan barang bukti administratif selama proses peradilan."
        ],
        keyNote: "Berita Acara Sidang yang dibuat Panitera menjadi dokumen resmi yang sangat vital jika perkara berlanjut ke tingkat Banding atau Kasasi."
    },
    {
        id: "terdakwa",
        shortTitle: "5. Terdakwa",
        icon: "👤",
        title: "Terdakwa",
        subtitle: "Subjek Hukum yang Didakwa Melakukan Tindak Pidana",
        seatId: "seat-terdakwa",
        description: "Terdakwa adalah seorang tersangka yang dituntut, diperiksa, dan diadili di sidang pengadilan karena diduga melakukan suatu tindak pidana.",
        legalBasis: "Pasal 1 butir 15 & Pasal 50-68 KUHAP.",
        duties: [
            "Berhak mendapatkan perlakuan berdasarkan asas Praduga Tak Bersalah (Presumption of Innocence) hingga ada putusan inkrah.",
            "Berhak didampingi oleh Penasihat Hukum (wajib didampingi negara jika ancaman pidana 5 tahun atau lebih).",
            "Memiliki hak ingkar (tidak dibebani kewajiban pembuktian; Jaksalah yang wajib membuktikan).",
            "Berhak memberikan keterangan secara bebas tanpa tekanan di depan sidang."
        ],
        keyNote: "Perubahan istilah: Terlapor (penyelidikan) → Tersangka (penyidikan) → Terdakwa (persidangan) → Terpidana (setelah vonis bersalah berkekuatan hukum tetap)."
    },
    {
        id: "saksi",
        shortTitle: "6. Saksi",
        icon: "👁️",
        title: "Saksi",
        subtitle: "Pemberi Keterangan Fakta Peristiwa",
        seatId: "seat-saksi",
        description: "Saksi adalah orang yang dapat memberikan keterangan guna kepentingan penyidikan, penuntutan, dan peradilan tentang suatu perkara pidana yang ia dengar sendiri, ia lihat sendiri, dan ia alami sendiri.",
        legalBasis: "Pasal 1 butir 26-27 KUHAP & Putusan MK No. 65/PUU-VIII/2010.",
        duties: [
            "Wajib hadir memenuhi panggilan pengadilan (kewajiban hukum warga negara).",
            "Wajib mengucapkan sumpah atau janji sesuai agamanya sebelum memberikan keterangan.",
            "Memberikan keterangan yang jujur dan tidak berbelit-belit (sumpah palsu diancam pidana Pasal 242 KUHP).",
            "Terbagi menjadi Saksi Memberatkan (a charge) dan Saksi Meringankan (a de charge)."
        ],
        keyNote: "Keterangan saksi yang hanya mendengar cerita dari orang lain disebut 'Testimonium de auditu' dan umumnya tidak memiliki nilai pembuktian langsung."
    }
];

const quizData = [
    {
        question: "1. Siapakah pihak yang bertugas menyusun Surat Dakwaan dan mewakili negara untuk membuktikan kesalahan terdakwa di persidangan?",
        options: [
            "Hakim Ketua",
            "Jaksa Penuntut Umum",
            "Panitera Pengganti",
            "Advokat"
        ],
        answer: 1,
        explanation: "Tepat! Berdasarkan Pasal 1 butir 6 KUHAP, Jaksa Penuntut Umum berwenang melakukan penuntutan dan membuktikan dakwaan di sidang pengadilan."
    },
    {
        question: "2. Seorang tersangka yang berkas perkaranya sudah dilimpahkan ke pengadilan dan sedang menjalani proses persidangan disebut sebagai...",
        options: [
            "Terpidana",
            "Terlapor",
            "Terdakwa",
            "Saksi Mahkota"
        ],
        answer: 2,
        explanation: "Benar! Statusnya berubah dari Tersangka (tahap penyidikan) menjadi Terdakwa (tahap pemeriksaan di sidang pengadilan)."
    },
    {
        question: "3. Dokumen resmi yang mencatat seluruh jalannya persidangan dari awal hingga akhir dibuat oleh...",
        options: [
            "Panitera",
            "Hakim Anggota",
            "Penasihat Hukum",
            "Jaksa"
        ],
        answer: 0,
        explanation: "Benar! Panitera bertugas mencatat seluruh proses persidangan ke dalam Berita Acara Sidang (BAS)."
    },
    {
        question: "4. Nota pembelaan yang diajukan oleh Penasihat Hukum atau Terdakwa untuk menanggapi tuntutan Jaksa disebut...",
        options: [
            "Eksepsi",
            "Requisitoir",
            "Pledoi",
            "Duplik"
        ],
        answer: 2,
        explanation: "Tepat! Pledoi adalah nota pembelaan setelah Jaksa membacakan tuntutan (Requisitoir), sedangkan Eksepsi adalah keberatan di awal terhadap surat dakwaan."
    },
    {
        question: "5. Asas hukum yang menyatakan bahwa terdakwa harus dianggap tidak bersalah sampai ada putusan pengadilan yang berkekuatan hukum tetap disebut...",
        options: [
            "Asas Legalitas",
            "Presumption of Innocence (Praduga Tak Bersalah)",
            "Nebis in Idem",
            "Testimonium de Auditu"
        ],
        answer: 1,
        explanation: "Benar! Asas Praduga Tak Bersalah menjamin hak-hak terdakwa selama proses peradilan berlangsung."
    }
];

let currentStep = 0; // 0-5 adalah materi, 6 adalah kuis
const totalSteps = modules.length + 1;

const stepperNav = document.getElementById("stepper-nav");
const contentArea = document.getElementById("content-area");
const progressBar = document.getElementById("progress-bar");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const stepIndicator = document.getElementById("step-indicator");

function initApp() {
    renderStepper();
    renderStep(0);
}

function renderStepper() {
    stepperNav.innerHTML = "";
    modules.forEach((mod, index) => {
        const btn = document.createElement("button");
        btn.className = "step-btn";
        btn.textContent = mod.shortTitle;
        btn.onclick = () => renderStep(index);
        stepperNav.appendChild(btn);
    });

    const quizBtn = document.createElement("button");
    quizBtn.className = "step-btn";
    quizBtn.textContent = "7. Kuis Evaluasi";
    quizBtn.onclick = () => renderStep(modules.length);
    stepperNav.appendChild(quizBtn);
}

function renderStep(index) {
    currentStep = index;
    updateNavigationUI();

    if (index < modules.length) {
        renderModuleContent(modules[index]);
    } else {
        renderQuizContent();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNavigationUI() {
    const buttons = document.querySelectorAll(".step-btn");
    buttons.forEach((btn, idx) => {
        btn.classList.remove("active", "completed");
        if (idx === currentStep) {
            btn.classList.add("active");
        } else if (idx < currentStep) {
            btn.classList.add("completed");
        }
    });

    const progressPercent = ((currentStep + 1) / totalSteps) * 100;
    progressBar.style.width = `${progressPercent}%`;

    stepIndicator.textContent = `Tahap ${currentStep + 1} dari ${totalSteps}`;
    btnPrev.disabled = currentStep === 0;
    btnNext.textContent = currentStep === totalSteps - 1 ? "Selesai" : "Selanjutnya →";
    btnNext.style.visibility = currentStep === totalSteps - 1 ? "hidden" : "visible";
}

function renderModuleContent(mod) {
    const dutiesList = mod.duties.map(item => `<li>${item}</li>`).join("");

    contentArea.innerHTML = `
        <div class="actor-header">
            <div class="actor-icon">${mod.icon}</div>
            <div class="actor-title">
                <h2>${mod.title}</h2>
                <div class="actor-subtitle">${mod.subtitle}</div>
            </div>
        </div>

        <p>${mod.description}</p>

        <div class="info-grid">
            <div class="info-box">
                <h4>📚 Dasar Hukum Utama</h4>
                <p style="font-size: 0.9rem;">${mod.legalBasis}</p>
                <br>
                <h4>💡 Catatan Penting Mahasiswa</h4>
                <p style="font-size: 0.9rem;">${mod.keyNote}</p>
            </div>
            <div class="info-box">
                <h4>⚖️ Tugas & Wewenang Pokok</h4>
                <ul>${dutiesList}</ul>
            </div>
        </div>

        <div class="courtroom-map">
            <h4>Posisi Duduk dalam Tata Ruang Sidang Pidana</h4>
            <div class="map-diagram">
                <div class="seat judge-seat ${mod.seatId === 'seat-hakim' ? 'highlight' : ''}">Majelis Hakim (Depan Tengah)</div>
                <div class="seat ${mod.seatId === 'seat-jaksa' ? 'highlight' : ''}">Jaksa Penuntut Umum (Kanan Hakim)</div>
                <div class="seat ${mod.seatId === 'seat-panitera' ? 'highlight' : ''}">Panitera (Belakang/Samping Hakim)</div>
                <div class="seat ${mod.seatId === 'seat-pengacara' ? 'highlight' : ''}">Penasihat Hukum (Kiri Hakim)</div>
                <div class="seat witness-seat ${mod.seatId === 'seat-terdakwa' || mod.seatId === 'seat-saksi' ? 'highlight' : ''}">
                    Kursi Pemeriksaan (${mod.seatId === 'seat-saksi' ? 'Saksi' : 'Terdakwa'})
                </div>
            </div>
        </div>
    `;
}

function renderQuizContent() {
    let quizHTML = `
        <div class="actor-header">
            <div class="actor-icon">📝</div>
            <div class="actor-title">
                <h2>Evaluasi Pemahaman Struktur Pengadilan</h2>
                <div class="actor-subtitle">Uji pemahaman Anda mengenai 6 aktor dalam peradilan pidana</div>
            </div>
        </div>
    `;

    quizData.forEach((q, qIndex) => {
        const optionsHTML = q.options.map((opt, oIndex) => `
            <label>
                <input type="radio" name="q${qIndex}" value="${oIndex}"> ${opt}
            </label>
        `).join("");

        quizHTML += `
            <div class="quiz-item">
                <div class="quiz-question">${q.question}</div>
                <div class="quiz-options">${optionsHTML}</div>
                <div class="quiz-feedback" id="feedback-${qIndex}"></div>
            </div>
        `;
    });

    quizHTML += `
        <button class="btn btn-primary" onclick="checkAnswers()">Periksa Jawaban & Lihat Skor</button>
        <div id="quiz-score" style="margin-top: 20px; font-weight: bold; font-size: 1.1rem;"></div>
    `;

    contentArea.innerHTML = quizHTML;
}

function checkAnswers() {
    let score = 0;
    quizData.forEach((q, qIndex) => {
        const selected = document.querySelector(`input[name="q${qIndex}"]:checked`);
        const feedbackEl = document.getElementById(`feedback-${qIndex}`);

        if (!selected) {
            feedbackEl.className = "quiz-feedback wrong";
            feedbackEl.textContent = "Anda belum memilih jawaban untuk soal ini.";
            return;
        }

        const userAns = parseInt(selected.value);
        if (userAns === q.answer) {
            score++;
            feedbackEl.className = "quiz-feedback correct";
            feedbackEl.textContent = q.explanation;
        } else {
            feedbackEl.className = "quiz-feedback wrong";
            feedbackEl.textContent = `Kurang tepat. Jawaban yang benar: ${q.options[q.answer]}. ${q.explanation}`;
        }
    });

    const finalScore = Math.round((score / quizData.length) * 100);
    document.getElementById("quiz-score").textContent = `Skor Anda: ${finalScore} / 100 (${score} dari ${quizData.length} soal benar)`;
}

btnPrev.onclick = () => {
    if (currentStep > 0) renderStep(currentStep - 1);
};

btnNext.onclick = () => {
    if (currentStep < totalSteps - 1) renderStep(currentStep + 1);
};

initApp();
