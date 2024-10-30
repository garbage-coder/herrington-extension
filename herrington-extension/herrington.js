(function() {
    var main = function($) { 
        var self = $.bHerrington = new function(){};
        var usedImages = [];
        var imageIndex = 0;
        var preloadedImages = [];

        // Предварительная загрузка изображений
        function preloadImages(lstImgs) {
            lstImgs.forEach(function(imgSrc) {
                var img = new Image();
                img.src = imgSrc;
                preloadedImages.push(img);
            });
        }

        $.extend(self, {
            bHerringtonImgs: [
				'https://www.meme-arsenal.com/memes/7d4065e52a9babf46293c259cc84a27a.jpg',
				'https://i.pinimg.com/564x/d4/dd/08/d4dd08e6a7131f358d0ebcca1094fd9a.jpg',
				'https://i.pinimg.com/564x/7d/df/c4/7ddfc470a3fc011dd2e434d3e142f9b8.jpg',
				'https://i.pinimg.com/564x/74/28/43/7428434730f2888b2a17f9d460f7626f.jpg',
				'https://m.media-amazon.com/images/M/MV5BZGRjZTczNWItMDk3NS00YmI0LTlmOTktYTQ4ZWQ1MzI1NmRhXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_.jpg',
				'https://queerty-prodweb.s3.amazonaws.com/2018/03/Screen-Shot-2018-03-05-at-9.47.06-AM.jpg',
				'https://i.redd.it/yfnsazgutrf41.jpg',
				'https://www.meme-arsenal.com/memes/00b50fe83c45aec7feec507ab46c4791.jpg',
				'https://www.meme-arsenal.com/memes/3a843d529e1d6dff46f9cb3709809d4a.jpg',
				'https://www.meme-arsenal.com/memes/6875b0a95c836ff994e4233ac6794094.jpg',
				'https://www.meme-arsenal.com/memes/081e8c5eb9203af8fff765e52a90e52c.jpg',
				'https://www.meme-arsenal.com/memes/55206c4c9f164f3ce43c0ef447708213.jpg',
				'https://www.shitpostbot.com/img/sourceimages/billy-herrington-5908b1d88a749.jpeg',
				'https://brilliantalmaz.github.io/BH/img/slider/01.png',
				'https://us-tuna-sounds-images.voicemod.net/a45bd392-a466-49a4-88e4-82f07be9b278-1671993344017.jpg',
				'https://cdn2.myvidster.com/user/thumbs/4a5df81a88f02b2fde5fdefc3ba4b9dc_1.jpg',
				'https://i.imgur.com/7aCui4U.jpg',
				'https://img10.joyreactor.cc/pics/post/full/gachimuchi-Billy-Herrington-%D0%98%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D0%98%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82-Aniki-5895626.png',
				'https://i.imgur.com/TaJUm6i.png',
				'https://xgm.guru/files/100/310241/izobrazhenie_2023-07-16_225900006.png',
				'https://i.ytimg.com/vi/XP-9mbEQRYE/maxresdefault.jpg',
				'https://i.redd.it/81vxj497bys31.png',
				'https://lastfm.freetls.fastly.net/i/u/ar0/faeabb2dc5122186218959f22a7ca362.png',
				'https://www.meme-arsenal.com/memes/574c35863bc2e208885e1637d8bb9093.jpg',
				'https://img10.reactor.cc/pics/comment/gachimuchi-Billy-Herrington-4183837.jpeg',
				'https://www.meme-arsenal.com/memes/875761b0df0bfa689db3c9eca3c1ec62.jpg',
				'https://www.meme-arsenal.com/memes/23d6776dfc8cc0723132e1a20f0b5bc2.jpg',
				'https://www.meme-arsenal.com/memes/f6c66ee15822639b8f2ba4f1685391d5.jpg',
				'https://www.meme-arsenal.com/memes/d17aa4c417cbc045074a60f5e9ec12b6.jpg',
				'https://www.meme-arsenal.com/memes/b2dd9fcb1e79a924d5d2b771c228fb89.jpg',
				'https://www.meme-arsenal.com/memes/1571060ef610c09fc959f4af8f9fc472.jpg',
				'https://www.meme-arsenal.com/memes/eb16a63ab125f285b9c4966ab10388c8.jpg',
				'https://www.meme-arsenal.com/memes/e036a2901f5cd5949a08d8ef04c20a54.jpg',
				'https://pbs.twimg.com/media/CrcAwrPVMAIQXpP.jpg',
				'https://pbs.twimg.com/media/GNyb82LWoAAy96A?format=jpg',
				'https://avatars.mds.yandex.net/i?id=28df3f3350eb68e0ddbad228385371373e9d2d5a-12463617-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=e56569f3d87b8f9fd89f6ec3ccc8a7004e02e5c4-5097034-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=8103c554aafe0610565019ea61e0b777-4080658-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=38c915d50444ba4c368b5268d9a1e3bbaf5794a8-8187788-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=bcbec80aebf92fb5853bcf5b0faf0e31a227974d-10870994-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=b799c24379acd4d65d5c4e26586d19d31ca75c9f-5400140-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=316be8da375f794e5b1e427a77d557d07e116177-10701561-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=5caf0fff3bee37daa1ac052f63738253723ece99-10414188-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=999bce6dbceb25f9f294bc7c4bcd59c0455f94e6-4010468-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=c7762cb28f60f8da92dfbbdf0bb3aaf032aafb71-9843030-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=1302fd295a875de8d9f3f3432f2202d24e08b23e-7762130-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=fa18bc53469df69c70220334d9802fd6bf6ecc32-9888116-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=14f44b067083ef420e7c2ff96411112e92a7974a-10527650-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=924577fb24119b7e996f840a19bb3edc12da475c-9843573-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=a538caee63f5dd8cea1632d2469aa3b131979c0f-9888116-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=36bb12f5ed1b561a15e356a5637f260e438df420-9701523-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=f84d749dd9f99f70f4714019d986aa21188df460-10576314-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=207170edfd99a3965e98cd14ac9d81b1606b5d27-12421676-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=fc8cc2a5f1b0ef9d31c10b4a3adbafa3472001b0-10859624-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=561ab91270740643c88e1fd51e0274da6846d7f9-10414188-images-thumbs&n=13',
                'https://grizly.club/uploads/posts/2022-12/1670967602_grizly-club-p-billi-kherrington-png-22.jpg',
				'https://avatars.mds.yandex.net/i?id=36f0cdcdfad9ccf5a692009f96b110be04d113bc-12935586-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=2eab2f2b0fdee1d64aeeafe3aacb7a3ef054dd19-9225904-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=5cf492593865fcdf12fc28f18b34505eadfaf142-10104341-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=e4b20eaf14fce67fbc38f67f689c5d140ccd161c-5246120-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=ce49c182ecd82b4f301df3a4e3547342b0fae715-5103569-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=caf8d5f308205d5ebf6660b5511e87d8b2c22beb-5232212-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=ef995d3c1f0c7a5e2108ab6e43d7b79c456ff9ea-5232212-images-thumbs&n=13',
				'https://sun6-21.userapi.com/s/v1/ig2/9a8SOc32xpOgPR-ml1zhUp4mZG_XKiBE3IqoG0vEOp1-9vaKt_RR27ow-dEFkWMEjNAmzpdgZNd17k_qU5WCQpoQ.jpg?size=400x0&quality=96&crop=0,0,996,996&ava=1',
				'https://avatars.mds.yandex.net/i?id=72ff36d3985abd406d5d3f649830dedb541ab4fa-5284027-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=8888bd939233e80c3be99b32e8b188fb5b50c113-12532291-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=20d3d9f5a9b16823d26118991c98f819-5870469-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=137dde5a327e88308bae1c41a89f5192844e23d7-10640295-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=606b9ae0d30ca3a55151bc4364268b020fa90ca2-10272337-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=b7b1be33ca7c8cd94c97148076f76a918f9b4643-10118230-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=2b8030ddf8a24ad76121141005a4d8983d7da9c5-4809943-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=5060992d6eaaac411fca44ada82fd2e1f36bd68e-10733191-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=f15d116914e66dc1b3c170323d3571d9c919f423-9863451-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=9c1809ac91fc3be3a66c641373fa420cc73056e3-10471586-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=76c3c37b2d06a52207c4c1b1cac94f66513da578-9111606-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=f84869f5a7809bd2d2d17bc651e637870881932d-4238614-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=91982ba56dc57f858f150b841743b551be8e1c40-8181332-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=0cb9897c6bf32e9e0ee691fc7c8810ec22d99ceb-10683820-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=903dde95d9ce0296fba36128e0ac67153e505132-4303091-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=e74221868c8791e7405496e19862e79de4d47d13-12544827-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=daf4473ee3532e3210daaf581b918bcf619222f2-9235087-images-thumbs&n=13',
				'https://avatars.mds.yandex.net/i?id=bd4c4c50ffd0ba7d9f478792f76f909b7f281b0e-12498607-images-thumbs&n=13',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQebaZS_SSgvIOiWpRfhtaeary8yEiEnUrEw&s',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOVLFPZmkCw5cZsdlt0OlHa_ZlIYe_Mg9QA&s',
				'https://lastfm.freetls.fastly.net/i/u/300x300/d93039d69ae84073956071fb3b8f36bf',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1nxp5LvV4fuTcpU09mVltatLiE7dYENnFA&s',
				'https://ih1.redbubble.net/image.2540238876.2994/gbra,6x6,1000x1000-c,0,0,675,900.jpg',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutAFvUUNrPfOFBOhk3JGIjb3uvI_WUufw5g&s',
				'https://pbs.twimg.com/media/C6iLxYLV4AElCow.jpg',
				'https://pbs.twimg.com/media/CtN3jbsVYAAVf69.jpg',
				'https://pbs.twimg.com/media/DXXeYKuWkAAUc__.jpg',
				'https://i.ytimg.com/vi/JCjACFg52MI/sddefault.jpg',
				'https://pbs.twimg.com/media/CSfQ9weXAAQ5ZIK.jpg',
				'https://pbs.twimg.com/media/CSfQ_-yWEAIwQ7X.jpg',
				'https://i1.sndcdn.com/artworks-kLtyL9F21sKuML7k-vi1SHw-t500x500.jpg',
				'https://pbs.twimg.com/media/CU6hYuCVEAAZE1q.jpg',
				'https://i.ytimg.com/vi/56gTkSkRh1s/maxresdefault.jpg',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK_x95-k9leP2OfGIDN6mNjqvRSI1T5dRBs6g7CcJgIE1OP5RRYwkeDow643dPJQLeP34&usqp=CAU',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3Itc6MLUAcJNK9ZJ-eccmsqo2Y5Ep9V4xq6ILPqe8wHdWoPGAhtCrLuZb47JqJTKaWM&usqp=CAU',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkKK3aQgNMzcPMAPnImgrs6GPlRZHWpZdM2Q&s',
				'https://i.ytimg.com/vi/ZbgjfcTBZyc/maxresdefault.jpg',
				'https://i.ytimg.com/vi/slQ13Uc5pKk/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgOyg7MA8=&rs=AOn4CLBrSzjdJJ_vuIzIK5xJsBTZNkO0AQ',
				'https://i.ytimg.com/vi/McoSp8CUHeQ/oar2.jpg?sqp=-oaymwEiCMAEENAFSFqQAgHyq4qpAxEIARUAAAAAJQAAyEI9AICiQw==&rs=AOn4CLDUDVrdf13NZRFK-nYzEzUoBbX3mg',
				'https://i.ytimg.com/vi/LO7LUF2V5Ds/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AG-B4AC0AWKAgwIABABGHIgQCg8MA8=&rs=AOn4CLCSnKZhG5oSdJWCib3eSyOCGbZghQ',
				'https://i.ytimg.com/vi/1ZXxjpQJXNI/hqdefault.jpg',
				'https://i.ytimg.com/vi/IOOqu6oowoc/maxresdefault.jpg',
				'https://external-preview.redd.it/oqdJzRFsz-mmOw9uo9z1D_-pBx05szFXOFu4mR4Wh7w.png?format=pjpg&auto=webp&s=f48d9e21e2bd5ac52cc21a1bb16b28f49596b576',
				'https://i.ytimg.com/vi/TxyyqV8ll60/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGDIgZSgeMA8=&rs=AOn4CLBq9JhNnDQfH2-y-LQSRzMjbFHM2Q',
				'https://i1.sndcdn.com/artworks-4V7qQiLUeLFJyfS7-Ggbhgg-t500x500.jpg',
				'https://3fc4ed44-3fbc-419a-97a1-a29742511391.selcdn.net/coub_storage/coub/simple/cw_timeline_pic/f8d2dc8344c/4b0a84eb180ee03416a92/med_1626292479_image.jpg',
				'https://i.ytimg.com/vi/zjt33vrkN8M/sddefault.jpg',
				'https://steamuserimages-a.akamaihd.net/ugc/782996923131708184/5322C0A5F301A0F88B407B37550723DE98F24B8F/',
				'https://live.staticflickr.com/8533/8684935071_856d796a55_b.jpg',
				'https://i.makeagif.com/media/9-22-2015/x8ObdJ.gif',
				'https://i.makeagif.com/media/10-16-2015/6yyK3X.gif',
				'https://steamuserimages-a.akamaihd.net/ugc/886505283939869483/8F899A214B2B3F9F8E7DA81443749307C6304217/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
				'https://media.tenor.com/vYNl9ddWxHQAAAAM/gachi-billy.gif',
				'https://media.tenor.com/Z0A3V-aC7T8AAAAM/gachi.gif',
				'https://sun9-33.userapi.com/impf/KOl1In1Zj4061wIMQt291ZRJtWYwkqOUa8G-Eg/TAXkwJA-kqc.jpg?size=604x455&quality=96&sign=c0c654a622ebb4a6805ce9729518a997&type=album',
				'https://pbs.twimg.com/media/BgJ2DRaIYAAFofh.jpg',
				'https://pbs.twimg.com/media/CYEZ29hWcAAQcq3.jpg',
				'https://pbs.twimg.com/media/CCWjr_3UEAAcf2G.jpg',
				'https://pbs.twimg.com/media/B6qiULUCcAADUy4.jpg',
				'https://media.tenor.com/gJVDguhepHcAAAAM/gachi-billy-herrington.gif',
				'https://media.tenor.com/AjsUjvOUP2QAAAAM/billy-herrington.gif',
				'https://media.tenor.com/sTqLUqoyZc4AAAAM/1557o94d12hr.gif',
				'https://media.tenor.com/wAHH2_8ezeoAAAAM/billy-gachi.gif',
				'https://media.tenor.com/hyizwUmf1csAAAAM/billy-herrington-flex.gif',
				'https://media.tenor.com/8R2DqGM5GMwAAAAM/gachi-billy-herrington.gif',
				'https://media.tenor.com/qu8mD3ClKagAAAAM/billy-herrington.gif',
				'https://media.tenor.com/345moOuK4FIAAAAM/billy-herrington-sergeant.gif',
				'https://media.tenor.com/vADKbpqeAtYAAAAM/gachi-gachimuchi.gif',
				'https://media.tenor.com/42JEbK9APFEAAAAM/giga-chad.gif',
				'https://media.tenor.com/4wdAulZ7It8AAAAM/gachimuchi-christmas.gif',
				'https://media.tenor.com/WOhCfmhc0OQAAAAM/billy.gif',
				'https://media.tenor.com/2647_haasDUAAAAM/billy-herrington-billy.gif',
				'https://media.tenor.com/6CkY5bNMrcIAAAAM/pashmak-ava-billy-herrington.gif',
				'https://media.tenor.com/aLnkNRi7ctsAAAAM/billy-herrington-jotaro-kujo.gif',
				'https://media.tenor.com/ZfaIuw4lGVEAAAAM/gachi-gachimuchi.gif',
				'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8d13727-8301-46f6-80f2-422c0b9b7fe3/de8dc3y-39061d03-959d-48ab-bc2e-eccd44cc5edd.png/v1/fill/w_500,h_502,q_80,strp/punished__venom__billy_by_skatrusish_de8dc3y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAyIiwicGF0aCI6IlwvZlwvZThkMTM3MjctODMwMS00NmY2LTgwZjItNDIyYzBiOWI3ZmUzXC9kZThkYzN5LTM5MDYxZDAzLTk1OWQtNDhhYi1iYzJlLWVjY2Q0NGNjNWVkZC5wbmciLCJ3aWR0aCI6Ijw9NTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZUxBAIRg0CLYydf3wBdi6cWKhDKJLz17T0yk41nuBig',
				'https://i.ytimg.com/vi/XdUm7_lUm14/hqdefault.jpg',
				'https://i.redd.it/r40xkz76jbk41.png',
				'https://i.ytimg.com/vi/qvQw6GVlsu0/mqdefault.jpg',
				'https://i.ytimg.com/vi/bduwFXO9m8A/oar2.jpg?sqp=-oaymwEiCMAEENAFSFqQAgHyq4qpAxEIARUAAAAAJQAAyEI9AICiQw==&rs=AOn4CLDBJMGcFEFhQU1pw1ho_nvaRWdLog',
				'https://meaws.com/wp-content/uploads/2018/03/billy-herrington1.jpg',
				'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/86429795-5777-472a-8ad3-37c848df1d44/dhi1xsf-5e5fb28b-1b93-40c9-b4cc-d1f331a8524c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2NDI5Nzk1LTU3NzctNDcyYS04YWQzLTM3Yzg0OGRmMWQ0NFwvZGhpMXhzZi01ZTVmYjI4Yi0xYjkzLTQwYzktYjRjYy1kMWYzMzFhODUyNGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lQKuh1VxzjefByDq_D07gRckWL2Hq_2UYi8z5E05Ofk',
				'https://risibank.fr/cache/medias/0/33/3327/332748/full.png',
				'https://cdn.donmai.us/sample/73/6a/__billy_herrington_real_life_and_1_more_drawn_by_saya_hi10__sample-736accedc818a04e812af61e72b21e7c.jpg',
				'https://pbs.twimg.com/media/DJHOZRgUIAAjuMq.jpg',
				'https://i.kym-cdn.com/photos/images/newsfeed/001/064/527/e8d.gif',
				'https://c1.cprnt.com/storage/i/52/8c/0f/00/60b34cae883d60a1ea32af6a/0b95fa530e374847a25e0c5ab77f411f.webp',
				'https://pbs.twimg.com/media/C_yZg9nVYAAMl1K.jpg',
				'https://i.pinimg.com/236x/76/80/e2/7680e2ce725657f4d8b2a90311177483.jpg',
				'https://i.pinimg.com/236x/b7/a5/b2/b7a5b2fab4aa3dab0be6382d7703cf3c.jpg',
				'https://i.pinimg.com/236x/fe/6a/29/fe6a29bba78efa23c405618f09fd5004.jpg',
				'https://i.pinimg.com/564x/a8/c1/44/a8c144c3dc73c0830bbae578b115b2d6.jpg',
				'https://i.pinimg.com/564x/75/9b/6c/759b6cc18362e2c0d5d708d0c7ce7174.jpg',
				'https://avatars.mds.yandex.net/i?id=87db5e445ce05a5ecf6a8077631e77e3361560c8-10785962-images-thumbs&n=13',
				'https://sun9-71.userapi.com/impg/g7P9Nvjd2volKM5YX6DNRqapWCkwSMcef6wEwg/wsBTwhmTDkw.jpg?size=1025x1080&quality=96&sign=fbb16879d22f5627a7b5851914a5d05c&c_uniq_tag=YNcKM3d4DokZB6DHen0JI6U5OPfMrVPSy2cseKZvYU4&type=album',
				'https://avatars.mds.yandex.net/i?id=ae758adb4d32a3728a97f87c788c4791a957b722-9042177-images-thumbs&ref=rim&n=33&w=241&h=250',
				'https://www.meme-arsenal.com/memes/ffa84e124ed500ccd287f4c4db71ea68.jpg',
				'https://sun9-4.userapi.com/impg/tEIN5OuZ0QkEFvOM6rOcrPE_PcTtvHPukG6wWw/ribfV9ZdU4k.jpg?size=1202x1600&quality=96&sign=8edc8e461f60106977b8928ec0e4e826&c_uniq_tag=8AbPuU8T8VX8tNMVW0HzigTOtMnTcq105uUhkrYwmMo&type=album',
				'https://sun9-58.userapi.com/impf/c855528/v855528301/2c2c2/B-cbafJ-CbQ.jpg?size=965x720&quality=96&sign=e589f38bbea32a09550bb4422ec660de&c_uniq_tag=-wqfIj3hpiXl_wdUhb-dzUL1a023umgyenUtlzsKy5Y&type=album',
				'https://i.ytimg.com/vi/GcBULSL6-dU/maxresdefault.jpg',
				'https://www.meme-arsenal.com/memes/75b36efe52830b0a3d2abf5dbb665157.jpg',
				'https://i.ytimg.com/vi/h4QXQHY-R4I/mqdefault.jpg',
				'https://sun6-22.userapi.com/s/v1/ig2/uwU-rOm15BXbwTPqCw-PeRxHaWSMhu_WAiz96xd0Gk3mkrn-vdTOMTQcxrcsBnr8md323G5epkAev_9x1LRiC1VM.jpg?size=400x400&quality=95&crop=51,4,437,437&ava=1',
				'https://i.imgur.com/nWko8Uc.jpg',
				'https://sun9-31.userapi.com/s/v1/ig2/wW9K8eB79ZrSIJPA9SVp8mOBILUGR933arnjS3gfzpnVN_XIDmcpiEtsvbsJm5-Ez3xa6gb6b29ydgDuyW7EnlkQ.jpg?size=400x400&quality=95&crop=92,0,760,760&ava=1',
				'https://sun6-21.userapi.com/s/v1/ig2/LotJfdlhAZKXZcGuBzn9XCwyKSDJF0P_5QkWL7Aol7MMiKrNsD82e3uel5meztKt7xgFdiGHhK3zKzFdKm1nZZGZ.jpg?size=400x400&quality=95&crop=259,0,503,503&ava=1',
				'https://i.ytimg.com/vi/r4U6OA1trC0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG-B4AC0AWKAgwIABABGFIgZSgiMA8=&amp;rs=AOn4CLBPe4Jsu12JChE_BcyuVc4Z74Xzjg',
				'https://avatars.mds.yandex.net/i?id=976451cf8163591ac4f14e5ac3c709c5-4407994-images-thumbs&n=13',
				'https://i.ytimg.com/vi/FHmDPfCZhhM/hqdefault.jpg',
				'https://i.ytimg.com/vi/1JCVIHESJnM/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgWChLMA8=&rs=AOn4CLB0v6_3zf5WWkoTmuNJZ7O0y_Wbkg',
				'https://i.ytimg.com/vi/Is-S3nu8UnA/hqdefault.jpg',
				'https://i.ytimg.com/vi/dxw0uCAKxLQ/maxresdefault.jpg',
				'http://i.ytimg.com/vi/65vy0u7tmqI/maxresdefault.jpg',
				'https://i.ytimg.com/vi/WGsSkBDZ2kg/maxresdefault.jpg',
				'https://yt3.googleusercontent.com/2TRkWUCdzCKOHB8gs0zTWe5fCFOtTo3KqyKLlZZIVq0h9TiVu6pP3E3t8YqLfZRz62iOpzyi6Q=s900-c-k-c0x00ffffff-no-rj',
				'https://sun1-22.userapi.com/s/v1/ig2/_nh_ngRz374v-Vm7iPiS55HC34vbW7e6MJZ9LTNXTFR4CBTgG5usNjPgN2iRrkeTXY6FkulpDo3ViYVRLn5MdafN.jpg?size=400x400&quality=96&crop=122,0,488,488&ava=1',
				'https://steamuserimages-a.akamaihd.net/ugc/936063271542851680/FCFDC5428C91FBD5485222B1F82B10F402C9F614/',
				'https://assets.faceit-cdn.net/avatars/f0a26f7f-d27b-4d00-a2b4-824c1678c0aa_1600234876035.jpg',
				'https://i.ytimg.com/vi/uakQWpvbYpc/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgTig9MA8=&rs=AOn4CLDrAaIVvfVvinaa0Gy49kHsnl_oVA',
				'http://i.ytimg.com/vi/g2tjAiaZczk/maxresdefault.jpg',
				'https://www.guiagaysaopaulo.com.br/public/uploads/imagens/originais/noticia-foto/Billy_Herrington_gay_ator_porno_morre_acidente.jpg',
				'https://i.ebayimg.com/images/g/G40AAOSwwV9lgSBC/s-l400.jpg',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2hdiZzB3cA_prNpQ_5dQWUPi1KZcVxLqWG50N9uhTKcyXAS3ERzF9I-DMPpt4LT6RCI&usqp=CAU',
				'https://i.ytimg.com/vi/9LlJL4MwRxQ/hqdefault.jpg',
				'https://cs12.pikabu.ru/images/previews_comm/2021-07_1/1625159842182878070.png',
				'https://i.ytimg.com/vi/29skzjfiVvM/maxresdefault.jpg',
				'https://xgm.guru/files/100/310241/Billy1.gif',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIGGnVZ3wsuDax2R8_6Ouj9JdY5BFzts99Q&s',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEXq4DNurOa2BSACdzluIQBc6N3VZKjgTZwbVS1QvQOV0Hr2-iOQF90P7mC3TRN85Kx8A&usqp=CAU',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRusraLxD80oeS7PC8OVN6HqWs-i8_ts7puC-J_IG148-C7Pk1lq6yWwV5UjYEqJszMClw&usqp=CAU',
				'https://i.ytimg.com/vi/WWHJHL26gEE/mqdefault.jpg',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMfUp59jL7hFgX9QzwwE4DzPOKusIbjoIpQ&s',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKWmc0C7phRjyJVb_xhtTVHaUJSeldXGmjpQ&s',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9USjLbYbqJNLr3tf5MkMliUuRFxxTt9J_wA&s',
				'https://img0.joyreactor.cc/pics/post/gachimuchi-Billy-Herrington-MaleBrotherhood-8442352.gif',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Billy-Herrington-%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA-%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F-7998764.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Billy-Herrington-7496731.jpeg',
				'https://img10.joyreactor.cc/pics/post/Billy-Herrington-gachimuchi-%D0%9C%D0%B5%D0%BC%D1%8B-%D0%A0%D0%B0%D0%B9%D0%B0%D0%BD-%D0%93%D0%BE%D1%81%D0%BB%D0%B8%D0%BD%D0%B3-7457182.jpeg',
				'https://img10.joyreactor.cc/pics/post/Place-reddit-Billy-Herrington-gachimuchi-7305671.png',
				'https://img10.joyreactor.cc/pics/post/Billy-Herrington-gachimuchi-%D1%81%D1%82%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D0%B8%D0%BA%D1%87%D0%B0-7203513.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-%D0%B1%D1%80%D0%B5%D0%BB%D0%BE%D0%BA-Billy-Herrington-7034289.jpeg',
				'https://img10.joyreactor.cc/pics/post/Major-Payne-Billy-Herrington-gachimuchi-6996241.jpeg',
				'https://img10.joyreactor.cc/pics/post/Billy-Herrington-gachimuchi-%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-Mein-kampf-6912366.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-1-%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8F-%D0%BF%D1%80%D0%B0%D0%B7%D0%B4%D0%BD%D0%B8%D0%BA-%D0%91%D0%B8%D0%BB%D0%BB%D0%B8-%D0%A5%D0%B5%D1%80%D1%80%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD-6874900.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Billy-Herrington-6830706.jpeg',
				'https://img10.joyreactor.cc/pics/post/Billy-Herrington-gachimuchi-6801610.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Doom-%28%D0%B8%D0%B3%D1%80%D0%B0%29-%D0%98%D0%B3%D1%80%D1%8B-Billy-Herrington-6700373.jpeg',
				'https://img10.joyreactor.cc/pics/post/The-Boys%D0%9F%D0%B0%D1%86%D0%B0%D0%BD%D1%8B-%28%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%29-%D0%A1%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B-gachimuchi-Homelander-6690143.jpeg',
				'https://img10.joyreactor.cc/pics/post/the-punisher-gachimuchi-right-version-Billy-Herrington-6455174.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Cyberpunk-2077-%D0%98%D0%B3%D1%80%D1%8B-Billy-Herrington-6361586.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Among-Us-%D0%98%D0%B3%D1%80%D1%8B-Van-Darkholme-6188227.jpeg',
				'https://img10.joyreactor.cc/pics/post/%D0%91%D0%B8%D0%BB%D0%BB%D0%B8-%D0%A5%D0%B5%D1%80%D1%80%D0%B8%D0%BD%D0%B3%D1%82%D0%BE%D0%BD-%D0%B3%D0%B0%D1%87%D0%B8%D0%BC%D1%83%D1%87%D0%B8-gachimuchi-Billy-Herrington-6045703.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Warhammer-40000-Wh-%D0%9F%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-wh-humor-5965038.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Devil-May-Cry-%D0%98%D0%B3%D1%80%D1%8B-Billy-Herrington-5834154.jpeg',
				'https://img10.joyreactor.cc/pics/post/gachimuchi-Billy-Herrington-5759921.jpeg',
				'https://img10.joyreactor.cc/pics/post/Devil-May-Cry-%D0%98%D0%B3%D1%80%D1%8B-gachimuchi-Billy-Herrington-4525708.jpeg',
            ],
            handleImages: function(lstImgs, time) {
                $.each($('img'), function(i, item) {
                    if($.inArray($(item).attr('src'), lstImgs) == -1) {
                        var h = $(item).height();
                        var w = $(item).width();

                        if(h > 0 && w > 0) {
                            $(item).css('width', w + 'px').css('height', h + 'px');
                            var newSrc = self.getUniqueImage(lstImgs);
                            $(item).attr('src', newSrc);
                        } else {
                            $(item).load(function() {
                                if($.inArray($(item).attr('src'), lstImgs) == -1) {
                                    var h = $(item).height();
                                    var w = $(item).width();
                                    $(item).css('width', w + 'px').css('height', h + 'px');
                                    var newSrc = self.getUniqueImage(lstImgs);
                                    $(item).attr('src', newSrc);
                                }
                            });
                        }
                    }
                });

                if(time > 0)
                    setTimeout(function(){self.handleImages(lstImgs, time);}, time);
            },
            getUniqueImage: function(lstImgs) {
                if (usedImages.length >= lstImgs.length) {
                    usedImages = [];
                }

                var newSrc;
                do {
                    imageIndex = Math.floor(Math.random() * lstImgs.length);
                    newSrc = lstImgs[imageIndex];
                } while (usedImages.indexOf(newSrc) !== -1);

                usedImages.push(newSrc);
                return newSrc;
            }
        });

        $(function(){
            preloadImages(self.bHerringtonImgs); // Предварительная загрузка изображений
            self.handleImages(self.bHerringtonImgs, 10);
        });
    };

    function loadJS(src, callback) {
        var s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onreadystatechange = s.onload = function() {
            var state = s.readyState;
            if (!callback.done && (!state || /loaded|complete/.test(state))) {
                callback.done = true;
                callback();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(s);
    }

    if(typeof jQuery == 'undefined') {
        loadJS(('https:' == document.location.protocol ? 'https://' : 'http://') + 'ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js', function(){
            jQuery.noConflict();
            main(jQuery);
        });
    } else {
        main(jQuery);
    }
})();
