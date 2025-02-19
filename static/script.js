const books = {
    fiction: [
        { 
            title: "Laskar Pelangi", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg", 
            link: "https://www.goodreads.com/book/show/1362193.Laskar_Pelangi?ref=nav_sb_ss_1_14" 
        },
        { 
            title: "Ayat-Ayat Cinta", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1439347437i/969177.jpg", 
            link: "https://www.goodreads.com/book/show/969177.Ayat_Ayat_Cinta?ref=nav_sb_ss_1_15" 
        },
        { 
            title: "Bumi Manusia", 
            cover: "https://covers.openlibrary.org/b/id/14840731-L.jpg", 
            link: "https://openlibrary.org/works/OL307247W/Bumi_Manusia?edition=key%3A/books/OL24390624M" 
        },
        { 
            title: "Sirkus Pohon", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1512140806i/36013261.jpg", 
            link: "https://www.goodreads.com/book/show/36013261-sirkus-pohon?ref=nav_sb_ss_1_12" 
        },
        { 
            title: "Dilan: Dia Adalah Dilanku Tahun 1990", 
            cover: "https://mansatubima.sch.id/wp-content/uploads/2022/04/dilan.jpg", 
            link: "https://mansatubima.sch.id/buku/dilan-dia-adalah-dilanku-tahun-1990/" 
        }
    ],
    "non-fiction": [
        { 
            title: "Negeri 5 Menara", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1249749162i/6688121.jpg", 
            link: "https://www.goodreads.com/book/show/6688121-negeri-5-menara?ref=nav_sb_ss_2_7" 
        },
        { 
            title: "Laskar Pelangi", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1489732961i/1362193.jpg", 
            link: "https://www.goodreads.com/book/show/1362193.Laskar_Pelangi?ref=nav_sb_ss_1_14" 
        },
        { 
            title: "Aroma Karsa", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1519064063i/37830526.jpg", 
            link: "https://www.goodreads.com/id/book/show/37830526-aroma-karsa" 
        },
        { 
            title: "Catatan Juang", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1514363101i/37733232.jpg", 
            link: "https://www.goodreads.com/book/show/37733232-catatan-juang?ref=nav_sb_ss_1_13" 
        },
        { 
            title: "The Power of Kepepet", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490273070i/6060923.jpg", 
            link: "https://www.goodreads.com/book/show/6060923-the-power-of-kepepet?ref=nav_sb_ss_1_20" 
        }
    ],
    mystery: [
        { 
            title: "Sebelum Dunia Gila", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566309137l/52221876.jpg", 
            link: "https://www.goodreads.com/book/show/52221876-151-konspirasi-dunia-paling-gila-mencengangkan?ref=nav_sb_ss_1_10" 
        },
        { 
            title: "Karyanya Tersimpan di Bawah Laut", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1180962096i/1098107.jpg", 
            link: "https://www.goodreads.com/book/show/1098107.Extrem_laut_und_unglaublich_nah?from_search=true&from_srp=true&qid=XBILzS6yVm&rank=2" 
        },
        { 
            title: "Misteri Harta Karun VOC", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1212559170i/2016000.jpg", 
            link: "https://www.goodreads.com/book/show/2016000.Rahasia_Meede?from_search=true&from_srp=true&qid=AxdIeImP2m&rank=1" 
        },
        { 
            title: "Rumah di Tengah Hutan", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1230441478i/6047453.jpg", 
            link: "https://www.goodreads.com/book/show/6047453-rumah-pohon-di-tengah-hutan?ac=1&from_search=true&qid=CRF6eDMbkO&rank=1" 
        },
        { 
            title: "Terror", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1336394890i/13637705.jpg", 
            link: "https://www.goodreads.com/book/show/13637705-teror?ref=nav_sb_ss_1_5" 
        }
    ],
    fantasy: [
        { 
            title: "Pulang", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1441194791i/26211806.jpg", 
            link: "https://www.goodreads.com/book/show/26211806-pulang?ref=nav_sb_ss_1_6" 
        },
        { 
            title: "Laut Bercerita", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1516602134i/36393774.jpg", 
            link: "https://www.goodreads.com/book/show/36393774-laut-bercerita?ref=nav_sb_ss_1_14" 
        },
        { 
            title: "Berkelana di Dunia Fantasi", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554939666i/45018154.jpg", 
            link: "https://www.goodreads.com/book/show/45018154-cinta-dunia-fantasi?ref=nav_sb_ss_1_13" 
        },
        { 
            title: "Seri Dunia Paralel", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1495032202i/2092275.jpg", 
            link: "https://www.goodreads.com/book/show/2092275.Dunia_Paralel?ref=nav_sb_ss_1_13" 
        },
        { 
            title: "Cerita dari Alam Gaib", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1407314492i/22878771.jpg", 
            link: "https://www.goodreads.com/book/show/22878771-misteri-alam-gaib?ref=nav_sb_ss_3_9" 
        }
    ],
    romance: [
        { 
            title: "P.S. I Love You", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422881430i/20698530.jpg", 
            link: "https://www.goodreads.com/book/show/20698530-p-s-i-still-love-you?ref=nav_sb_ss_1_15" 
        },
        { 
            title: "Satu Cinta Dua Hati", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1719074509i/215124214.jpg", 
            link: "https://www.goodreads.com/book/show/215124214-mrs-nuh?ref=nav_sb_ss_2_19" 
        },
        { 
            title: "Cinta di Balik Hujan", 
            cover: "https://divapress-online.com/Files/cover_buku/1675759733_-.jpeg", 
            link: "https://divapress-online.com/book/cinta-di-bawah-hujan" 
        },
        { 
            title: "Hati yang Tertinggal", 
            cover: "https://assets.kbm-cdn.com/image/webp/2024kVRtibdCqnfRajQA7ZYDCC.webp", 
            link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkbm.id%2Fbook%2Fread%2F2daf9703-1bfe-4362-a5d4-f8a01baf7c87%2F1b5e786b-1b52-467a-bc68-b50ef990537d&psig=AOvVaw13Eq48pMvHSUYCSh_s3mrF&ust=1740066709125000&source=images&cd=vfe&opi=89978449&ved=0CBkQjhxqFwoTCMDV7OOL0IsDFQAAAAAdAAAAABAE" 
        },
        { 
            title: "Rindu yang Tak Terucapkan", 
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1707575127i/208151487.jpg", 
            link: "https://www.goodreads.com/id/book/show/208151487-rindu-yang-tak-terucap" 
        }
    ]
};

// Event listener for the recommendation button
document.getElementById('recommendButton').addEventListener('click', function() {
    const genre = document.getElementById('genreSelect').value;
    const recommendations = books[genre];

    let htmlContent = '';
    recommendations.forEach(book => {
        htmlContent += `
            <div class="col-12 col-md-4 mb-4">
                <div class="card">
                    <img src="${book.cover}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title"><a href="${book.link}" target="_blank">${book.title}</a></h5>
                    </div>
                </div>
            </div>
        `;
    });

    document.getElementById('bookRecommendations').innerHTML = htmlContent;
});
