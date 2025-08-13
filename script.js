   // Arrays de produtos
    const cervejas = [
      { nome: "Heineken", preco: 5.00, descricao: "lata", imagem: "https://th.bing.com/th/id/OIP.gLGHPrgQbovtQU4wXE6hYwHaHa?rs=1&pid=ImgDetMain" },
      { nome: "Skol", preco: 4.00, descricao: "lata", imagem: "https://armazemseuluiz.com.br/storage/app/uploads/public/637/bc8/624/637bc8624b183689503712" },
      { nome: "Original", preco: 4.50, descricao: "lata", imagem: "https://coopsp.vtexassets.com/arquivos/ids/232285-800-800?v=638158831793470000&width=800&height=800&aspect=true" },
      { nome: "itaipava", preco: 3.50, descricao: "lata", imagem: "https://phygital-files.mercafacil.com/bom-lugar/uploads/produto/cerveja_itaipava_pilsen_lata_350ml_39322ea1-7219-4bea-9ab6-7056b2fb940b.jpg" },
      { nome: "Colorado Ribeirão Lager", preco: 10.00, descricao: "lata", imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/88937-cerveja-colorado-ribeirao-lager-lata-350ml.jpg" },
      { nome: "Império", preco: 4.00, descricao: "lata, esgotado", imagem: "https://tfchgi.vteximg.com.br/arquivos/ids/171586-1000-1000/7898915949209.jpg?v=637783886469700000" },
      { nome: "Brahma Duplo Malte", preco: 5.00, descricao: "lata, esgotado", imagem: "https://lelecodelivery.com.br/wp-content/uploads/2020/10/BRAHMA-DUPLO-MALTE-1024x1024.png" },
      { nome: "Amstel", preco: 3.50, descricao: "lata", imagem: "https://static.paodeacucar.com/img/uploads/1/498/24656498.jpg" },
    ];

    const longnecks = [
      { nome: "Heineken Long", preco: 10.00, descricao: "longneck", imagem: "https://www.imigrantesbebidas.com.br/bebida/images/products/full/222-cerveja-heineken-long-neck-330ml.jpg" },
      { nome: "Corona Long", preco: 10.00, descricao: "longneck", imagem: "https://t3.ftcdn.net/jpg/03/17/49/16/360_F_317491690_r9vvpVqgOeuuvjQWDReJwOxGTYJWGPdy.jpg" },
      { nome: "Estrella Galicia Long", preco: 10.00, descricao: "longneck, esgotado", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Px6SHQLIlOwnn-4-kTlJBFN8TmUgZFXgfA&s" },
    ];

    const caixas = [
      { nome: "Caixa Heineken", preco: 35.00, descricao: "6 latas", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-BpZjvyKcEQZqVhORefgHg7sPUUjcqNg_JQ&s" },
      { nome: "Caixa Budweiser", preco: 32.00, descricao: "12 latas, esgotado", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmMWVZa-NZ6I1FqbP0dcRJCuq1h-rDljUDQ&s" },
      { nome: "Caixa Império", preco: 45.00, descricao: "12 latas, esgotado", imagem: "https://th.bing.com/th/id/R.a1a367f44bc3b90244f47d3013ce7fe5?rik=jgM5vE7P0vt9eQ&riu=http%3a%2f%2fio.convertiez.com.br%2fm%2fsuperpaguemenos%2fshop%2fproducts%2fimages%2f55388%2fsmall%2fcerveja-imperio-puro-malte-350ml-com-15-unidades_103811.png&ehk=awY2mS170m2G6hj9OZe%2frVq0eNNA5mxul6QCY4HrMyw%3d&risl=&pid=ImgRaw&r=0 " },
      { nome: "Caixa Original", preco: 32.00, descricao: "12 latas", imagem: "https://static.paodeacucar.com/img/uploads/1/133/23981133.jpg?im=Resize,width=200" },
      { nome: "Caixa Brahma Duplo Malte", preco: 50.00, descricao: "12 latas", imagem: "https://http2.mlstatic.com/D_Q_NP_981955-MLU71273938267_082023-O.webphttps://http2.mlstatic.com/D_Q_NP_981955-MLU71273938267_082023-O.webp" },
      { nome: "Caixa Skol", preco: 45.00, descricao: "12 latas", imagem: "https://trend-files-public-prod.s3.us-east-1.amazonaws.com/thumbs/840-0ace217d-55a6-437c-a8fb-b3980213435f.jpg" },
      { nome: "Caixa Petra", preco: 35.00, descricao: "12 latas, esgotado", imagem: "https://down-br.img.susercontent.com/file/1ab035353f4e835d76425f4f8a7e7ec0" },
      { nome: "Caixa itaipava", preco: 35.00, descricao: "12 latas, esgotado", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRv0PGrZhHohVu1IcT3xXdbmGIvPFl0Enh0g&s" },

    ];

    const whiskys = [
      { nome: "Red Label 1l", preco: 110.00, descricao: "destilados", imagem: "https://i5.walmartimages.com/asr/70d063f5-8328-44b2-91ee-9eec40f5908c_2.53a1ae92e78bba8bafae76f4d204b660.jpeg" },
      { nome: "Jack Daniel s 1l", preco: 170.00, descricao: "destilados", imagem: "https://imagevault.skulibrary.com/ColesLiquor/NoPrefix/e2520ee2b408c79be0916bdd062e372f1423c031/images/2400/id/CLG-8331431-1.jpg" },
      { nome: "Jack Daniel s Fire 1l", preco: 170.00, descricao: "destilados, esgotado", imagem: "https://cdn.myshoptet.com/usr/www.bumbaj.sk/user/shop/big/519_jack-daniel-s-fire-35--0-70-l.jpg?6362878e" },
      { nome: "Jack Daniel s Honey 700ml", preco: 130.00, descricao: "destilados, esgotado", imagem: "https://www.casadabebida.com.br/img/products/4277/000.webp" },
      { nome: "Chanceler 1l", preco: 130.00, descricao: "destilados", imagem: "https://images.tcdn.com.br/img/img_prod/1199398/whisky_chanceler_1l_407_1_5a4509a4ea0d4b253fceff59ba30c4fc.jpeg" },
      { nome: "Cavalo Branco 1l", preco: 130.00, descricao: "destilados", imagem: "https://tse1.mm.bing.net/th/id/OIP.mAanFdmAlKAaVmo5MMQVDAHaFX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ];

    const cachaças = [
      { nome: "Kariri", preco: 21.00, descricao: "destilados", imagem: "https://a-static.mlcdn.com.br/800x560/cachaca-kariri-com-k-ouro-960ml/lojamegaadegakanguru/58808/1a65b5b3a20645039770b3618c58abaf.jpeg" },
      { nome: "51", preco: 16.00, descricao: "destilados", imagem: "https://th.bing.com/th/id/OIP.fXxl1bXRfFe5mBvlfe8OHgHaHa?rs=1&pid=ImgDetMain" },
      { nome: "Pitu", preco: 7.00, descricao: "destilados", imagem: "https://armazemnordestino.com.br/wp-content/uploads/2023/03/Lata-pitu.jpg" },
      { nome: "Dreher", preco: 23.00, descricao: "destilados", imagem: "https://th.bing.com/th/id/OIP.5VQoPaa8pU-60wwDUGYMpQHaKe?rs=1&pid=ImgDetMain" },
      { nome: "Contine", preco: 37.00, descricao: "destilados, esgotado", imagem: "https://a-static.mlcdn.com.br/1500x1500/vermouth-contini-bianco-900ml/rbbebidasdistribuidora/217p/2c856567ad2439a849f7442a9fed5577.jpeg" },
    ];

    const vodkas = [
      { nome: "Askov", preco: 21.00, descricao: "destilados", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1LIPSSEm-Qw1vhIM3vGxVHHKSK_3e5g2ppw&s" },
      { nome: "Vodka Smirnoff", preco: 39.00, descricao: "destilados", imagem: "https://mfresh.s3.amazonaws.com/uploads/product/sku/3538/image/dc63d991-7ccb-4108-b95c-8c547ad85a33.jpeg" },
    ];
    
    const energeticos = [
      { nome: "Red Bull", preco: 10.00, descricao: "diversos sabores", imagem: "https://www.imigrantesbebidas.com.br/img/bebida/images/products/full/3401-energetico-red-bull-energy-drink-250ml.jpg?s=60f44e2e30f15d9fb0bee05c289d03a9" },
      { nome: "Monster", preco: 12.00, descricao: "diversos sabores", imagem: "https://images.tcdn.com.br/img/img_prod/774261/energy_monster_lata_473ml_306_1_2081e6152f57ef62aa20d9698098229a.jpg" },
      { nome: "Vibe", preco: 12.00, descricao: "diversos sabores", imagem: "https://th.bing.com/th/id/OIP.6yO_wZZX3vwUdnj8JLQI_gHaHa?rs=1&pid=ImgDetMain" },
    ];

    const gins = [
      { nome: "Eternity Morango", preco: 25.00, descricao: "destilados", imagem: "https://http2.mlstatic.com/D_NQ_NP_607309-MLB75894747180_042024-O.webp" },
      { nome: "Eternity Maçã Verde", preco: 25.00, descricao: "destilados", imagem: "https://bebidasfamosas.vtexassets.com/arquivos/ids/161572/Gin-Eternity-Maca-Verde-900ml.jpg?v=638514742696530000" },
      { nome: "Eternity Melancia", preco: 25.00, descricao: "destilados", imagem: "https://a-static.mlcdn.com.br/800x560/bebida-gin-eternity-doce-sabores-900ml-6-unidades-watermelon/emporio016/8002-255/b9acb5ed9068e0e4b20cf15801241aa7.jpeg" },
      { nome: "Eternity Tropical", preco: 25.00, descricao: "destilados", imagem: "https://tse2.mm.bing.net/th/id/OIP.JUI-J_D9q87drj6VyfBfHwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { nome: "Eternity Coco e Açai", preco: 25.00, descricao: "destilados", imagem: "https://tse3.mm.bing.net/th/id/OIP.UUO_vX7XKfXEI_J0B549fQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { nome: "Eternity Pêssego e Framboesa", preco: 25.00, descricao: "destilados", imagem: "https://a-static.mlcdn.com.br/1500x1500/gin-eternity-pessego-e-framboesa-900ml/royalbebidasonline/21572/84455031705a9ab383542caba1ee0128.jpeg" },
    ];

    const refrigerantes = [
      { nome: "Coca 2l", preco: 12.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4nTKaUjgSEYdCcIm7I8GwhcqQodqm0TM_Q&s" },
      { nome: "Coca Lata", preco: 5.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBzSgqGO---3GGcWKiNBRcxeNSlS-zXJcSQ&s" },
      { nome: "Coca 200ml", preco: 3.00, descricao: "esgotado", imagem: "https://andinacocacola.vtexassets.com/arquivos/ids/158146/CCO-200ML--1000-x-1000-px-.jpg?v=638575081418230000" },
      { nome: "Dolly Guaraná 2l", preco: 8.00, imagem: "https://imagens.jotaja.com/produtos/3d4e49ea-07cb-4b01-a139-e41bb6e54f54.jpg" },
      { nome: "Dollynho Guaraná", preco: 3.00, imagem: "https://d3gdr9n5lqb5z7.cloudfront.net/fotos/1359.jpg" },
      { nome: "Dollynho Limão", preco: 3.00, descricao: "esgotado", imagem: "https://d3gdr9n5lqb5z7.cloudfront.net/fotos/3077.jpg" },
    ];

    const Tabacaria = [
      { nome: "Seda cx", preco: 4.00, imagem: "https://images.tcdn.com.br/img/img_prod/952861/seda_zomo_natural_perfect_king_size_un_29233_1_a1b7eb99e72203624f4160e4106f6922.jpg" },
      { nome: "Piteira", preco: 7.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR17hHvKCI2CnZIK-cE808DvH64AP0gULe9Pg&s" },
      { nome: "Rothmans Azul", preco: 9.50, imagem: "https://cdn.awsli.com.br/600x700/230/230578/produto/124688696/0a01917000.jpg" },
      { nome: "Rothmans Vermelho", preco: 9.50, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj_T2mVa1t7tHRp2RYOOJQksWwu5KWKhhUUA&s" },
     ];

    const Doses = [
      { nome: "Dose Eternity", preco: 10.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Cavalo Com Red Bull", preco: 25.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Gin Rocks", preco: 12.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Red Label Com Red Bull", preco: 35.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Jack Daniels Com Red Bull", preco: 45.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Cavalo Com Vibe", preco: 20.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Tanqueray Com Red Bull", preco: 35.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Kariri", preco: 20.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Quente", preco: 5.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Smirnoff Red Bull", preco: 25.00, imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
      { nome: "Dose Malibu", preco: 20.00, descricao: "esgotado", imagem: "https://static-images.ifood.com.br/pratos/bfb79dbd-916c-4e08-aac1-1bbb7a92d2c0/202502010049_Y0M8_i.jpg" },
    ];

    const Salgadinhos = [
      { nome: "Torcida Churrasco", preco: 3.50, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1kOc7bGorAI35eEiHN3ozuljrgGgBPRW3w&s" },
      { nome: "Torcida Pimena Mexicana", preco: 3.50, imagem: "https://lojaqui.com.br/images/produtos/site/40034.jpg" },
      { nome: "Torcida Bacon", preco: 5.00, imagem: "https://destro.fbitsstatic.net/img/p/salgadinho-torcida-bacon-38g-84839/271396.jpg?w=500&h=500&v=202501231555&qs=ignore" },
      { nome: "Fofura Churrasco", preco: 3.50, imagem: "https://carrefourbrfood.vtexassets.com/arquivos/ids/78506187/salg-fofura-churrasco-70g-1.jpg?v=638005034569370000" },
      { nome: "Fofura Presunto", preco: 3.50, imagem: "https://destro.fbitsstatic.net/img/p/salgadinho-fofura-sabor-presunto-60g-87645/274642.jpg?w=320&h=320&v=202501231555&qs=ignore" },
    ];

    const Combos = [
      { nome: "Combo Cavalo Branco 1L Vibe", preco: 120.00, imagem: "https://http2.mlstatic.com/D_717389-MLB76682632390_062024-C.jpg" },
      { nome: "Combo Passaport 1L Vibe", preco: 90.00, imagem: "https://http2.mlstatic.com/D_NQ_NP_652758-MLB49110655467_022022-O-kit-combo-whisky-passport-1l-6-red-bull-envio-imediato.webp" },
      { nome: "Combo Jack Deniel's 700ML", preco: 170.00, descricao: "esgotado", imagem: "https://storage.deliveryvip.com.br/yYtMhpz7isbjhNzRTe4Ld4Gh81nbUnjrGNVzjMVDYX8/s:400:0/Z3M6Ly9kZWxpdmVy/eXZpcC9oYXJhZmtr/Z3Q0ZHQ0M3NiZnRw/ZmtmZGlwbzlp" },
      { nome: "Combo Jack Deniel's Honey 700ML", preco: 170.00, descricao: "esgotado", imagem: "https://http2.mlstatic.com/D_NQ_NP_995784-MLB48741512264_012022-O-kit-whisky-jack-daniels-mel-4-red-bulls-agua-de-coco.webp" },
      { nome: "Combo Jack Deniel's Fire 1L", preco: 210.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvJ5V54kKcOm-4oZScjGnnLAvu_MzY5Vd2iA&s" },
      { nome: "Combo Red Label Vibe", preco: 130.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTGo55xlDlT8eNFhV_ODb9FHfllr9VDK1sA&s" },
      { nome: "Combo Rocks 1L Vibe", preco: 58.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2jveRfEJs2y4lW11swvwHTovm8WXcyMj56P49NX-Z3GtmURUxu8ti___ujcmZ5svFw-M&usqp=CAU" },
      { nome: "Combo Eternity", preco: 48.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuW7PPGwlWLWclWI5y3q0QUCZ0MaxKOJ5ZA&s" },
    ];

    const Gelos = [
      { nome: "Gelo Maçã Verde", preco: 3.50, imagem: "https://tse4.mm.bing.net/th/id/OIP.M-HaZ_OtmCj5r6y0YCWegAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { nome: "Gelo Morango", preco: 3.50, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyqQTiiDhL0AM7KkTEBveLysp9QAO4afFBTA&s" },
      { nome: "Gelo Maracuja", preco: 3.50, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTso1LCNnngI2nZiG5rWBDKsJR5Rj21IUG2QQ&s" },
      { nome: "Gelo de Coco", preco: 3.50, imagem: "https://tse2.mm.bing.net/th/id/OIP.4h99x3CqzjEUNXFhRTzXUgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" },
    ];

    // Juntando todos os produtos em um array para busca
    const todosProdutos = [
      ...cervejas,
      ...longnecks,
      ...caixas,
      ...whiskys,
      ...Combos,
      ...energeticos,
      ...gins,
      ...cachaças,
      ...Doses,
      ...refrigerantes,
      ...Tabacaria,
      ...Salgadinhos,
      ...Gelos,
      ...vodkas
    ];

    // Elementos do DOM
    const contadorCarrinho = document.getElementById("contador-carrinho");
    const listaCarrinho = document.getElementById("lista-carrinho");
    const subtotalCarrinho = document.getElementById("subtotal-carrinho");
    const descontoContainer = document.getElementById("desconto-container");
    const descontoValor = document.getElementById("desconto-valor");
    const totalCarrinho = document.getElementById("total-carrinho");
    const modalCarrinho = document.getElementById("modal-carrinho");
    const modalNome = document.getElementById("modal-nome");
    const welcomePopup = document.getElementById("welcome-popup");

    // Cupons pré-definidos (adicionados diretamente no código)
    const cupons = [
      { codigo: "PARÁ15", tipo: "porcentagem", valor: 16, ativo: true },
      { codigo: "PARCEIRO2", tipo: "porcentagem", valor: 19, ativo: true },
      { codigo: "FERIADO25", tipo: "porcentagem", valor: 15, ativo: true },

    ];

    // Variável para armazenar cupons aplicados
    let cuponsAplicados = JSON.parse(localStorage.getItem('cuponsAplicados')) || [];

    // Mostrar popup quando a página carregar
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(() => {
        welcomePopup.classList.remove('hidden');
      }, 1000);
      
      // Renderiza todos os produtos inicialmente
      renderizarTodosProdutos();
    });

    function fecharPopup() {
      welcomePopup.classList.add('hidden');
    }

    // Função para aplicar cupom de desconto
    function aplicarCupom() {
      const cupomInput = document.getElementById('cupom-desconto').value.trim().toUpperCase();
      const mensagemCupom = document.getElementById('cupom-mensagem');
      
      if (!cupomInput) {
        mensagemCupom.textContent = 'Digite um cupom válido';
        mensagemCupom.className = 'text-sm mb-2 text-red-600';
        mensagemCupom.classList.remove('hidden');
        return;
      }
      
      // Verifica se o cupom existe e está ativo
      const cupom = cupons.find(c => c.codigo === cupomInput && c.ativo);
      
      if (!cupom) {
        mensagemCupom.textContent = 'Cupom inválido ou inativo';
        mensagemCupom.className = 'text-sm mb-2 text-red-600';
        mensagemCupom.classList.remove('hidden');
        return;
      }
      
      // Verifica se o cupom já foi aplicado
      if (cuponsAplicados.some(c => c.codigo === cupomInput)) {
        mensagemCupom.textContent = 'Este cupom já foi aplicado';
        mensagemCupom.className = 'text-sm mb-2 text-yellow-600';
        mensagemCupom.classList.remove('hidden');
        return;
      }
      
      // Adiciona o cupom à lista de cupons aplicados
      cuponsAplicados.push(cupom);
      localStorage.setItem('cuponsAplicados', JSON.stringify(cuponsAplicados));
      
      mensagemCupom.textContent = `Cupom ${cupom.codigo} aplicado com sucesso!`;
      mensagemCupom.className = 'text-sm mb-2 text-green-600';
      mensagemCupom.classList.remove('hidden');
      
      // Limpa o campo de cupom
      document.getElementById('cupom-desconto').value = '';
      
      // Atualiza o carrinho para mostrar o desconto
      verCarrinho();
    }

    function calcularDescontos(subtotal) {
      let descontoTotal = 0;
      let descontoPorcentagem = 0;
      let descontoValorFixo = 0;
      
      // Primeiro aplica os descontos de valor fixo
      cuponsAplicados.forEach(cupom => {
        if (cupom.tipo === 'valor') {
          descontoValorFixo += cupom.valor;
        }
      });
      
      // Limita o desconto de valor fixo ao subtotal
      descontoValorFixo = Math.min(descontoValorFixo, subtotal);
      
      // Aplica os descontos percentuais sobre o valor restante
      const subtotalAposFixo = subtotal - descontoValorFixo;
      
      cuponsAplicados.forEach(cupom => {
        if (cupom.tipo === 'porcentagem') {
          descontoPorcentagem += cupom.valor;
        }
      });
      
      // Limita o desconto percentual a 100%
      descontoPorcentagem = Math.min(descontoPorcentagem, 100);
      
      const descontoPorcentagemValor = subtotalAposFixo * (descontoPorcentagem / 100);
      
      descontoTotal = descontoValorFixo + descontoPorcentagemValor;
      
      return {
        descontoTotal,
        descontoPorcentagem,
        descontoValorFixo
      };
    }

    // Função de busca de produtos melhorada
    function buscarProdutos() {
      const termoBusca = document.getElementById('busca-produto').value.toLowerCase().trim();
      
      // Não faz busca se tiver menos de 3 caracteres
      if (termoBusca.length < 3) {
        // Mostra todas as categorias se a busca for vazia ou com menos de 3 letras
        document.querySelectorAll('[id$="s"]').forEach(categoria => {
          categoria.classList.remove('hidden-category');
          categoria.previousElementSibling.classList.remove('hidden-category');
        });
        
        // Remove resultados de busca anteriores
        const resultadosAnteriores = document.getElementById('resultados-busca-container');
        if (resultadosAnteriores) {
          resultadosAnteriores.remove();
        }
        return;
      }

      // Esconde todas as categorias
      document.querySelectorAll('[id$="s"]').forEach(categoria => {
        categoria.classList.add('hidden-category');
        categoria.previousElementSibling.classList.add('hidden-category');
      });

      // Busca por correspondência parcial em nome ou descrição
      const resultados = todosProdutos.filter(produto => 
        produto.nome.toLowerCase().includes(termoBusca) ||
        (produto.descricao && produto.descricao.toLowerCase().includes(termoBusca)))
        .sort((a, b) => {
          // Ordena por melhor correspondência (começa com o termo)
          const aStartsWith = a.nome.toLowerCase().startsWith(termoBusca);
          const bStartsWith = b.nome.toLowerCase().startsWith(termoBusca);
          
          if (aStartsWith && !bStartsWith) return -1;
          if (!aStartsWith && bStartsWith) return 1;
          return 0;
        });

      // Remove resultados anteriores
      const resultadosAnteriores = document.getElementById('resultados-busca-container');
      if (resultadosAnteriores) {
        resultadosAnteriores.remove();
      }

      const container = document.createElement('div');
      container.id = 'resultados-busca-container';
      
      if (resultados.length > 0) {
        const resultadosContainer = document.createElement('div');
        resultadosContainer.id = 'resultados-busca';
        resultadosContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10';
        
        // Título com contagem de resultados
        const titulo = document.createElement('h2');
        titulo.className = 'text-2xl font-bold mb-4 text-amber-600';
        titulo.textContent = `${resultados.length} resultado(s) para "${termoBusca}"`;
        container.appendChild(titulo);
        
        // Adiciona os produtos encontrados
        resultados.forEach(produto => {
          resultadosContainer.innerHTML += `
            <div class="glass p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
              <img src="${produto.imagem}" class="rounded-xl mb-4 w-full h-40 object-cover" alt="${produto.nome}">
              <h3 class="text-xl font-bold mb-2">${produto.nome}</h3>
              <p class="text-gray-300 mb-2">${produto.descricao || "Produto gelado e pronto para você!"}</p>
              <div class="flex justify-between items-center">
                <span class="text-lg font-semibold text-amber-600">R$ ${produto.preco.toFixed(2)}</span>
                <button onclick="adicionarCarrinho('${produto.nome.replace(/'/g, "\\'")}', ${produto.preco})" class="bg-amber-600 hover:bg-amber-500 text-black px-4 py-1.5 rounded-xl">Pedir</button>
              </div>
            </div>
          `;
        });
        
        container.appendChild(resultadosContainer);
      } else {
        // Mensagem quando não há resultados
        const mensagem = document.createElement('div');
        mensagem.className = 'text-center py-8 text-gray-400';
        mensagem.textContent = `Nenhum produto encontrado para "${termoBusca}"`;
        container.appendChild(mensagem);
      }
      
      // Insere os resultados no início da lista de produtos
      const produtosSection = document.getElementById('produtos-container');
      produtosSection.insertBefore(container, produtosSection.firstChild);
    }

    // Função para renderizar todos os produtos nas categorias
    function renderizarTodosProdutos() {
      renderCategoria(cervejas, "cervejas");
      renderCategoria(longnecks, "longnecks");
      renderCategoria(caixas, "caixas");
      renderCategoria(whiskys, "whiskys");
      renderCategoria(Combos, "combos");
      renderCategoria(energeticos, "energeticos");
      renderCategoria(gins, "gins");
      renderCategoria(cachaças, "cachaças");
      renderCategoria(Doses, "doses");
      renderCategoria(refrigerantes, "refrigerantes");
      renderCategoria(Tabacaria, "tabacaria");
      renderCategoria(Salgadinhos, "salgadinhos");
      renderCategoria(Gelos, "gelos");
      renderCategoria(vodkas, "vodkas");
    }

    const renderCategoria = (produtos, containerId) => {
  const container = document.getElementById(containerId);
  produtos.forEach((p, i) => {
    const esgotado = p.descricao && p.descricao.toLowerCase().includes("esgotado");
    container.innerHTML += `
      <div class="glass p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform flex flex-col justify-between">
        <div>
          <img src="${p.imagem}" class="rounded-xl mb-4 w-full h-40 object-cover" alt="${p.nome}">
          <div class="flex justify-between items-start mb-2">
            <h3 class="text-xl font-bold">${p.nome}</h3>
            ${esgotado ? '<span class="badge-esgotado">Esgotado</span>' : ''}
          </div>
          <p class="text-gray-300 mb-2 h-10">${p.descricao || "Produto gelado e pronto para você!"}</p>
        </div>
        <div class="flex justify-between items-center mt-auto">
          <span class="text-lg font-semibold text-yellow-400">R$ ${p.preco.toFixed(2)}</span>
          ${esgotado 
            ? '<button class="bg-gray-500 text-white px-4 py-1.5 rounded-xl cursor-not-allowed" disabled>Esgotado</button>' 
            : `<button onclick="adicionarCarrinho('${p.nome}', ${p.preco})" class="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-1.5 rounded-xl">Pedir</button>`
          }
        </div>
      </div>
    `;
  });
};
    function adicionarCarrinho(nome, preco) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      const existente = carrinho.find(item => item.nome === nome);
      if (existente) {
        existente.qtd++;
      } else {
        carrinho.push({ nome, preco, qtd: 1, observacao: "" });
      }
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      atualizarContador();
      mostrarToast();
    }

    function atualizarContador() {
      let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      const totalItens = carrinho.reduce((acc, item) => acc + item.qtd, 0);
      contadorCarrinho.textContent = totalItens;
    }

    function verCarrinho() {
      let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      listaCarrinho.innerHTML = "";
      let subtotal = 0;
      
      carrinho.forEach((item, i) => {
        subtotal += item.preco * item.qtd;
        
        const observacaoId = `observacao-${i}`;
        const temObservacao = item.observacao && item.observacao.trim() !== "";
        
        listaCarrinho.innerHTML += `
          <li class="border-b pb-4">
            <div class="flex justify-between items-start">
              <div class="w-1/2">
                <span class="font-medium">${item.nome}</span>
                ${temObservacao ? `<div class="text-sm text-gray-600 mt-1">Obs: ${item.observacao}</div>` : ''}
              </div>
              <div class="flex items-center gap-2">
                <button onclick="alterarQtd(${i}, -1)" class="bg-gray-200 px-2 rounded">−</button>
                <span>${item.qtd}</span>
                <button onclick="alterarQtd(${i}, 1)" class="bg-gray-200 px-2 rounded">+</button>
              </div>
              <span class="w-20 text-right">R$ ${(item.preco * item.qtd).toFixed(2)}</span>
              <button onclick="removerItem(${i})" class="text-red-500 ml-2 font-bold">×</button>
            </div>
            
            <div class="mt-2">
              <span class="observacao-toggle" onclick="toggleObservacao('${observacaoId}')">
                ${temObservacao ? 'Editar observação' : 'Adicionar observação'}
              </span>
              <div id="${observacaoId}" class="observacao-input hidden">
                <input type="text" 
                       value="${item.observacao || ''}" 
                       placeholder="Ex: sabor tropical, gelo maracuja, etc." 
                       class="w-full p-2 border rounded text-sm"
                       onchange="salvarObservacao(${i}, this.value)">
              </div>
            </div>
          </li>
        `;
      });
      
      // Atualiza os valores com desconto
      document.getElementById('subtotal-carrinho').textContent = "R$ " + subtotal.toFixed(2);
      
      const { descontoTotal } = calcularDescontos(subtotal);
      const total = Math.max(0, subtotal - descontoTotal);
      
      if (descontoTotal > 0) {
        document.getElementById('desconto-container').classList.remove('hidden');
        document.getElementById('desconto-valor').textContent = "-R$ " + descontoTotal.toFixed(2);
        document.getElementById('total-carrinho').textContent = "R$ " + total.toFixed(2);
      } else {
        document.getElementById('desconto-container').classList.add('hidden');
        document.getElementById('total-carrinho').textContent = "R$ " + subtotal.toFixed(2);
      }
      
      modalCarrinho.classList.remove("hidden");
    }

    function toggleObservacao(id) {
      const element = document.getElementById(id);
      element.classList.toggle("hidden");
      if (!element.classList.contains("hidden")) {
        element.querySelector("input").focus();
      }
    }

    function salvarObservacao(index, observacao) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      if (index >= 0 && index < carrinho.length) {
        carrinho[index].observacao = observacao;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        verCarrinho();
      }
    }

    function alterarQtd(index, delta) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      carrinho[index].qtd += delta;
      if (carrinho[index].qtd <= 0) carrinho.splice(index, 1);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      verCarrinho();
      atualizarContador();
    }

    function removerItem(index) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      carrinho.splice(index, 1);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      verCarrinho();
      atualizarContador();
    }

    function limparCarrinho() {
      localStorage.removeItem("carrinho");
      cuponsAplicados = [];
      localStorage.removeItem('cuponsAplicados');
      document.getElementById('cupom-desconto').value = '';
      document.getElementById('cupom-mensagem').classList.add('hidden');
      verCarrinho();
      atualizarContador();
    }

    function fecharCarrinho() {
      modalCarrinho.classList.add("hidden");
    }

    function abrirModalNome() {
      modalNome.classList.remove("hidden");
    }

    function fecharModalNome() {
      modalNome.classList.add("hidden");
    }

    function finalizarPedido() {
      const nome = document.getElementById("nome-cliente").value.trim();
      const endereco = document.getElementById("endereco-cliente").value.trim();
      const formap = document.getElementById("forma-pagamento").value.trim();

      if (!nome || !endereco || !formap) {
        alert("Por favor, preencha seu nome, endereço e forma de pagamento.");
        return;
      }

      const carrinho = JSON.parse(localStorage.getItem("carrinho") || "[]");
      const subtotal = carrinho.reduce((acc, item) => acc + item.preco * item.qtd, 0);
      const { descontoTotal } = calcularDescontos(subtotal);
      const total = Math.max(0, subtotal - descontoTotal);

      let mensagem = `Olá! Meu nome é ${nome}, gostaria de fazer um pedido:\n\n`;

      carrinho.forEach(item => {
        mensagem += `- ${item.qtd}x ${item.nome} (R$ ${(item.preco * item.qtd).toFixed(2)})`;
        if (item.observacao && item.observacao.trim() !== "") {
          mensagem += ` - Obs: ${item.observacao}`;
        }
        mensagem += `\n`;
      });

      mensagem += `\nSubtotal: R$ ${subtotal.toFixed(2)}\n`;
      
      if (cuponsAplicados.length > 0) {
        mensagem += `Desconto: -R$ ${descontoTotal.toFixed(2)}\n`;
      }
      
      mensagem += `Total: R$ ${total.toFixed(2)}\n`;
      mensagem += `\nEndereço para entrega: ${endereco}`;
      mensagem += `\nForma de Pagamento: ${formap}`;

      const url = `https://wa.me/5511914042925?text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");

      localStorage.removeItem("carrinho");
      cuponsAplicados = [];
      localStorage.removeItem('cuponsAplicados');
      document.getElementById('cupom-desconto').value = '';
      document.getElementById('cupom-mensagem').classList.add('hidden');
      fecharModalNome();
      fecharCarrinho();
      atualizarContador();
    }

    function mostrarToast() {
      const toast = document.getElementById("toast");
      toast.classList.add("show");
      setTimeout(() => toast.classList.remove("show"), 2500);
    }
 