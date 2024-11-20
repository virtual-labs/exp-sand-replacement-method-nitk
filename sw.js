importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"9cd060deab19b6ca5c3ca206760e1886","url":"contributors.html"},{"revision":"cfca3dbe07f2fcbfff2aa44f09cbe363","url":"feedback.html"},{"revision":"f7cf6712fdc1d7216e42e483c9eec5c1","url":"images/1.png"},{"revision":"a7989c519b37bb89306b1d9cdf7f8452","url":"images/10.png"},{"revision":"92ff7e2403de675f030760af6401dfce","url":"images/12.png"},{"revision":"1303b01ea239d379ab46172c92b635ef","url":"images/13.png"},{"revision":"e0af31f8ec0e494c1b90a5594c154ea6","url":"images/14.png"},{"revision":"684ee4007143ed2480a830947bfd6452","url":"images/15.png"},{"revision":"06ad906f1330edb715e1e0c5e000bfca","url":"images/16.png"},{"revision":"52b585f2d4d8f7c0750640d14880cea6","url":"images/17.png"},{"revision":"b251e8f121426ec2be3fe4bac8d35ff6","url":"images/2.png"},{"revision":"67867f96894b2ce971c6ac75be3b9aac","url":"images/3.png"},{"revision":"529070c855a634aa52dd625cb96f76b5","url":"images/4.png"},{"revision":"8fb3f4e139e2d7e5a130a8ca42ddd419","url":"images/5.png"},{"revision":"51e87357616c2580c30fab5aefc09abb","url":"images/6.png"},{"revision":"5a143a5ab2b752549415f769efc89754","url":"images/7.png"},{"revision":"43ac12f28b51beda957db9cda4114c0c","url":"images/8.png"},{"revision":"a384ba3f228cb9615afd33bf4c8bcf69","url":"images/9.png"},{"revision":"890974dcacbd2e40b9e019d72d8263f6","url":"images/sd.png"},{"revision":"9099e9eb1f4b6574774618a5c34159f1","url":"images/theory1.png"},{"revision":"011fd5f47eff8f10bf6675fb8537e3e4","url":"images/theory2.jpg"},{"revision":"dbf6d50180e5c7099e60639cf258c45e","url":"index.html"},{"revision":"89052200fd46bc84edbf1f8396bdf172","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"925c1c204c4294c205c2618011db634d","url":"posttest.html"},{"revision":"e062c1e280a70cfa6ead479875b416c7","url":"posttest.json"},{"revision":"2a6b7659e4b384451817fec42aac0804","url":"pretest.html"},{"revision":"87a019f4db8217c5630a6419c4a0e194","url":"pretest.json"},{"revision":"d7a75c7824e98ba3de94fbbb0eb89db2","url":"procedure.html"},{"revision":"bfc5775a338cda9abf029885584a6c59","url":"references.html"},{"revision":"c392e2c774788100b464515410aba95d","url":"simulation.html"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"8cbfe2cc7c63b65b47cee5b669f2fa34","url":"simulation/css/mathstyle.css"},{"revision":"b4225ec1f33693bd9c4bf5b04c2acf8e","url":"simulation/css/soft.css"},{"revision":"4985b3d3ed13f10fda070441f84c89b6","url":"simulation/images/121.png"},{"revision":"457daf176fad68189eb1122fd42ebd9d","url":"simulation/images/1211.png"},{"revision":"1c06b5f0a81bd997915e12e41aa46e53","url":"simulation/images/15.png"},{"revision":"777fe5feb86ac53d59dcae2583fb8a4a","url":"simulation/images/1a.png"},{"revision":"b0cc6254ca0445558faf0bee3f9017b0","url":"simulation/images/3a.png"},{"revision":"fc0c9651fb1ee7b6d34b83f0d69181c7","url":"simulation/images/4a.png"},{"revision":"f4a33d6624aa5c7b903fa095a0d3f277","url":"simulation/images/9.png"},{"revision":"afe4902ebd1286ed1613ad7d0a409767","url":"simulation/images/arrow1.png"},{"revision":"4eaa311b800b8ad03470840bcadbcb26","url":"simulation/images/baseplate.png"},{"revision":"0562049e8685489475d0a4603500b443","url":"simulation/images/cap.png"},{"revision":"bbfc195c95414fb8f5da563c032e9334","url":"simulation/images/capan.png"},{"revision":"eea7e2028caef4c24cc47ee94da7bc01","url":"simulation/images/collor3.png"},{"revision":"85ce2b51c7cb13a6c7245ca9d180bd01","url":"simulation/images/container.png"},{"revision":"3270b3f4210bb0d08cac9abe3b06fb9e","url":"simulation/images/coverblue.png"},{"revision":"20ec752f1c650fe136dd6db39112e1e6","url":"simulation/images/cs.png"},{"revision":"58b065db4423e54dbf4d6488b629b885","url":"simulation/images/cs2.png"},{"revision":"63f01eedf5c6b0597d2b94659f18af44","url":"simulation/images/cylinder.png"},{"revision":"88a65fc963c3da35916532415f65a372","url":"simulation/images/cylinder9.png"},{"revision":"a76be66bc18e5e15ac9d0cf9f402ddc4","url":"simulation/images/cylinder99.png"},{"revision":"d1b0c674e80b9e6f30a22bc8f6e5b2a7","url":"simulation/images/cylinderWithoutSoil.png"},{"revision":"2bef710a893a95d3a5843f892c7ceb75","url":"simulation/images/downCompact.png"},{"revision":"95a179f60d85d75a51e49cd60df05c7d","url":"simulation/images/e1.png"},{"revision":"28c26e989b2844fa5d2162bce87c485c","url":"simulation/images/e3.png"},{"revision":"278b6e333e58624d07dddadd5db2636e","url":"simulation/images/emptyGlass.png"},{"revision":"f0898f1f4a9b4933a7df453994dffe12","url":"simulation/images/emptyMould.png"},{"revision":"6a17b2414b133941f737918e2120c30a","url":"simulation/images/ewm.png"},{"revision":"2b8aa5259490768556e15b475186da7c","url":"simulation/images/fullSetup.png"},{"revision":"0ce4c25e03800f28d1fa16cfc8b471ee","url":"simulation/images/glassSand.png"},{"revision":"e8c25190c097c0ba714055a9cc2fc7d2","url":"simulation/images/grap.png"},{"revision":"ed69f7ac5f66d5b62def71d4d3552abd","url":"simulation/images/graph.png"},{"revision":"b2397268ceaf8a95cf7d01a67a64b97c","url":"simulation/images/handCompact.png"},{"revision":"3a9eb14dc91a8a12163dad9b13e6568c","url":"simulation/images/hn.png"},{"revision":"30ec623c4881b69e22fddf25e0b6819a","url":"simulation/images/hn2.png"},{"revision":"521957601c64195cf12f6e5a5b3f35be","url":"simulation/images/hole.png"},{"revision":"7e63b1e6ed8d9d01bf358981dada30c5","url":"simulation/images/hole.svg"},{"revision":"adc83a4d82b7db0ec261a8092586b8a8","url":"simulation/images/human.png"},{"revision":"ec12760b871e47e23cb668cc38c95be6","url":"simulation/images/key.png"},{"revision":"807ae665b1b33daa866ad527646b1e42","url":"simulation/images/mld.png"},{"revision":"c9287d2c727191cd73b0e65875d03cc3","url":"simulation/images/mould.png"},{"revision":"69e62c9a3934b678129b27bf0e7036fc","url":"simulation/images/msrdev.png"},{"revision":"6f4ba97fe305045db02900f8037c23b9","url":"simulation/images/msrdev1.png"},{"revision":"52a35102d779a493ca405c8a29435b93","url":"simulation/images/msrdev2.png"},{"revision":"6425eb01bfbf45e8fc44b9c7b9575553","url":"simulation/images/Next.png"},{"revision":"d07e71b19911a54633a9d01f86fc7eff","url":"simulation/images/on.png"},{"revision":"2e889c7fdc18c73655bb703194afa978","url":"simulation/images/oven.png"},{"revision":"0455c710d376d032e1c21b2c3d2bff05","url":"simulation/images/ovenknob.png"},{"revision":"1a9942b3fef414b73f3e042ef41ad6c0","url":"simulation/images/pan_fill.png"},{"revision":"7a64dd43315a6a4782b402a7a95e7e4c","url":"simulation/images/pc.png"},{"revision":"ec5919901671db618b3bc3d2bdc78256","url":"simulation/images/pc1.png"},{"revision":"a94997da161460caf04b789a14fd419f","url":"simulation/images/pl.png"},{"revision":"6124bb41dcd368557cb39907379eec45","url":"simulation/images/plain.png"},{"revision":"a8cf3cd437b0de2e312ded6c3aa2e8ce","url":"simulation/images/plain.svg"},{"revision":"9e0a32e171f9fc401c41466320135235","url":"simulation/images/plate.png"},{"revision":"e64349b1234666ee240f861db6183e7d","url":"simulation/images/pour.png"},{"revision":"cb23c21f7cf7cc69797225106ad74efc","url":"simulation/images/pourGlassSand.png"},{"revision":"2fb317b7f77a3ca89e2ba396872688de","url":"simulation/images/rammer3.png"},{"revision":"7969527087fd76ffb9b1aa0a86e079c5","url":"simulation/images/residual.png"},{"revision":"85c4dc77fe8d2cb079d74280c664fb5e","url":"simulation/images/results.png"},{"revision":"aa374c20153a8fcf19a9166fefb6170c","url":"simulation/images/s_off.png"},{"revision":"f1f5cedc5f8a9aa7e6ca3d7da462c9bd","url":"simulation/images/s_on_on.png"},{"revision":"8bff052d5294189468141364d25116e5","url":"simulation/images/s_on.png"},{"revision":"7fe26d591f5b77b18eecc9b76456e489","url":"simulation/images/sandPlate.png"},{"revision":"d411f56ff8b57a342ca5d93398c33b4a","url":"simulation/images/sands.png"},{"revision":"7580e4bc7203367e29788b62f2033c5e","url":"simulation/images/scale1.png"},{"revision":"0625474f9ac2c9f718dc278e148bfe89","url":"simulation/images/setup.png"},{"revision":"eeae92f14c7a2870a43bb96c0b76209a","url":"simulation/images/soil.png"},{"revision":"244f0a75b93369480affa0ceee4762f4","url":"simulation/images/sp90.png"},{"revision":"d4abbcb7df603c05a8638d120aa409ab","url":"simulation/images/sstand.png"},{"revision":"39fa0e18b20e585b71144d197953752a","url":"simulation/images/table.png"},{"revision":"3853f7b5c550bcb51b508b7e92e80afd","url":"simulation/images/tamping_rod3.png"},{"revision":"1ca1d8d3544ecbb0191d48244234ad0e","url":"simulation/images/tamping_rod4.png"},{"revision":"75db70f69397c9aeefd951d9472a498d","url":"simulation/images/tare.png"},{"revision":"3e6729e4158239969cb1eacffe7d1b9e","url":"simulation/images/trowel.png"},{"revision":"5b70cdd0a1d1f20ba884d13c05ad7124","url":"simulation/images/trowel.svg"},{"revision":"25b04e2026205da2ceee0fc8bbe49c22","url":"simulation/images/trowel2.png"},{"revision":"352cd342f2be8731022f4544e8a75d12","url":"simulation/images/trowel2.svg"},{"revision":"00367ed7cacd1a7a5ff48123b9cf018f","url":"simulation/images/trowels.png"},{"revision":"06743d2f4a95721f85f2250c509c758a","url":"simulation/images/trowels.svg"},{"revision":"53f3dbfcb8231ad4e42c6f0279819102","url":"simulation/images/v1.png"},{"revision":"6072a8f7205314617f9243e1194a6423","url":"simulation/images/v1.svg"},{"revision":"036b20abe41ca118b44e93aefbc081d3","url":"simulation/images/v2.png"},{"revision":"3599f7e062f97f5d3bc4df45ddac77d7","url":"simulation/images/vc1.png"},{"revision":"aae1085a643a945f514a39108ce9e816","url":"simulation/images/vc2.png"},{"revision":"d332a8293103127a01e8afc05e3b048d","url":"simulation/images/wa.png"},{"revision":"16e23bde46e8cdabe58f03934ba360ac","url":"simulation/images/wm1.png"},{"revision":"05beea7ca9285abf9855aa8a1a7cb2bf","url":"simulation/images/ws.png"},{"revision":"dbcae2e56f01b6bdb228faafedb7eaba","url":"simulation/images/ws2.png"},{"revision":"f68366cb74ef3a7d924f15bcdc8c0067","url":"simulation/images/ws3.png"},{"revision":"6009f00b6cc65f743fc6acade3396b66","url":"simulation/images/ws4.png"},{"revision":"07ba99614c27b5a91ab3a11d28ad85ed","url":"simulation/index.html"},{"revision":"a09e13ee94d51c524b7e2a728c7d4039","url":"simulation/js/jquerymin.js"},{"revision":"f2e04b5aa07d8486e93e9ba8fec5738b","url":"simulation/js/soft.js"},{"revision":"56e5f7c0581c772be7c2101de624da9d","url":"theory.html"},{"revision":"b32ff63254fa8fe47ebef921116c7467","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );