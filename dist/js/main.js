/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('14 january 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n    sliderContent: 'portfolio-content',\r\n    sliderItemClass: 'portfolio-item',\r\n    sliderBtnsClass: 'portfolio-btn',\r\n    nextSlideBtn: '#arrow-right',\r\n    prevSlideBtn: '#arrow-left',\r\n    slideActiveClass: 'portfolio-item-active',\r\n    dotsContentClass: 'portfolio-dots',\r\n    dotClass: 'dot',\r\n    dotActiveClass: 'dot-active',\r\n    timer: 3000\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    idForm: '#form1',\r\n    someElem: [{\r\n        type: 'block',\r\n        id: '#total'\r\n    }]\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    idForm: '#form2',\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n    idForm: '#form3',\r\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./modules/helper.js\");\n\r\nconst calc = (price = 100) => {\r\n    const calcBlock = document.querySelector('.calc-block');\r\n    const calcType = document.querySelector('.calc-type');\r\n    const calcSquare = document.querySelector('.calc-square');\r\n    const calcCount = document.querySelector('.calc-count');\r\n    const calcDay = document.querySelector('.calc-day');\r\n    const total = document.querySelector('#total');\r\n\r\n    const calcInputs = document.querySelectorAll('.calc-block > input');\r\n\r\n    const countCalc = () => {\r\n        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n        const calcSquareValue = calcSquare.value;\r\n\r\n        let totalValue = 0;\r\n        let calcCountValue = 1;\r\n        let calcDayValue = 1;\r\n\r\n        if (calcCount.value > 1) {\r\n            calcCountValue += +calcCount.value / 10;\r\n        }\r\n\r\n        if (calcDay.value && calcDay.value < 5) {\r\n            calcDayValue = 2;\r\n        } else if (calcDay.value && calcDay.value < 10) {\r\n            calcDayValue = 1.5;\r\n        }\r\n\r\n        if (calcType.value && calcSquare.value) {\r\n            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n\r\n            (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 500,\r\n                timing(timeFraction) {\r\n                    return Math.pow(timeFraction, 4);\r\n                },\r\n                draw(progress) {\r\n                    total.textContent = Math.round(progress * totalValue);\r\n                }\r\n            });\r\n        } else {\r\n            totalValue = 0;\r\n        }\r\n    };\r\n\r\n    calcInputs.forEach(input => {\r\n        input.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D/gi, '');\r\n        });\r\n    });\r\n\r\n    calcBlock.addEventListener('change', (e) => {\r\n        countCalc();\r\n    });\r\n\r\n\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\r\n    const allForms = document.querySelectorAll('form');\r\n\r\n    const getValidMessage = (elem, status) => {\r\n\r\n        if (status === 'success' && elem.value !== '') {\r\n            elem.classList.add(status);\r\n            elem.style.outline = '2px solid #28a745';\r\n        } else if (status !== 'success' && elem.value !== '') {\r\n            elem.classList.remove('success');\r\n            elem.style.outline = '2px solid #dc3545';\r\n        } else {\r\n            elem.classList.remove('success');\r\n            elem.style.outline = '';\r\n        }\r\n\r\n    };\r\n\r\n    allForms.forEach(form => {\r\n        const inputs = form.querySelectorAll('input');\r\n\r\n        inputs.forEach(input => {\r\n            if (input.type === 'text' || input.placeholder === 'Ваше сообщение') {\r\n                input.addEventListener('blur', (e) => {\r\n                   \r\n                    if (!/[^а-яА-ЯёЁ0-9 -]/ig.test(e.target.value) && e.target.value.length > 2) {\r\n                        getValidMessage(e.target, 'success');\r\n                        input.setCustomValidity('');\r\n                    } else if(e.target.value.length <= 2) {\r\n                        getValidMessage(e.target, 'error');\r\n                        input.setCustomValidity('допустимо не меньше 2 символов');\r\n                    }else {\r\n                        getValidMessage(e.target, 'error');\r\n                        input.setCustomValidity('допустима только кириллица');\r\n                        \r\n                    }\r\n                    // e.target.value= e.target.value.replace(/[^а-яА-ЯёЁ0-9 -]/ig, '');\r\n                });\r\n            } else if (input.type === 'email') {\r\n                input.addEventListener('blur', (e) => {\r\n                    if (/^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$/.test(e.target.value)) {\r\n                        getValidMessage(e.target, 'success');\r\n                        const arr = [];\r\n                        e.target.value.replace(/([^(a-z0-9) \\.\\@\\-\\_])/gi, (match) => {\r\n                            arr.push(match);\r\n                            if (arr.length) {\r\n                                e.target.value = arr.join('');\r\n                            }\r\n                        });\r\n                    } else {\r\n                        getValidMessage(e.target, 'error');\r\n                    }\r\n\r\n                });\r\n            } else if (input.type === 'tel') {\r\n                input.addEventListener('blur', (e) => {\r\n\r\n                    if (!/[^0-9\\+ \\-\\(\\)]/ig.test(e.target.value) && e.target.value.length >= 6 && e.target.value.length <= 12) {\r\n                        getValidMessage(e.target, 'success');\r\n                        input.setCustomValidity('');\r\n                        const arr = [];\r\n                        e.target.value.replace(/([7-8]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/gi, (match, p1, p2, p3, p4, p5) => {\r\n                            e.target.value = `+7 (${p2})-${p3}-${p4}-${p5}`;\r\n                        });\r\n                    } else if(e.target.value.length < 6 || e.target.value.length > 12){\r\n                        getValidMessage(e.target, 'error');\r\n                        input.setCustomValidity('длина номера телефона должна быть не менее 6 символов и не более 12 символов');\r\n                    }else {\r\n                        getValidMessage(e.target, 'error');\r\n                        input.setCustomValidity('разрешены цифры, знак “+”, круглые скобки и дефис');\r\n                    }\r\n                });\r\n            }\r\n        });\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/helper.js":
/*!***************************!*\
  !*** ./modules/helper.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"goToAncor\": () => (/* binding */ goToAncor)\n/* harmony export */ });\nconst animate = ({\r\n    timing,\r\n    draw,\r\n    duration\r\n}) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) {\r\n            timeFraction = 1;\r\n        }\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\nconst goToAncor = (e) => {\r\n    document.querySelector(e.hash).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n    });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/helper.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\n\r\nconst menu = () => {\r\n    const menu = document.querySelector('menu');\r\n    const mainAncor = document.querySelector('a[href=\"#service-block\"]');\r\n\r\n    const toggleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    // const goToAncor = (e) => {\r\n    //     document.querySelector(e.hash).scrollIntoView({\r\n    //         behavior: 'smooth',\r\n    //         block: 'start'\r\n    //     });\r\n    // };\r\n\r\n    document.addEventListener('click', (e) => {\r\n        try {\r\n            if(e.target.closest('.close-btn') || e.target.closest('.menu')) {\r\n                e.preventDefault();\r\n                toggleMenu();\r\n            } else if(e.target.matches('ul > li > a')) {\r\n                e.preventDefault();\r\n                (0,_helper__WEBPACK_IMPORTED_MODULE_0__.goToAncor)(e.target.closest('a'));\r\n                toggleMenu();\r\n            } else if (mainAncor === e.target.closest('a')) {\r\n                e.preventDefault();\r\n                (0,_helper__WEBPACK_IMPORTED_MODULE_0__.goToAncor)(mainAncor);\r\n            } else if(e.target !== menu && menu.classList.contains('active-menu')) {\r\n                toggleMenu();\r\n            }\r\n        }catch(err){\r\n            console.log(err);\r\n        }\r\n        \r\n    });\r\n        \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper.js */ \"./modules/helper.js\");\n\r\n\r\nconst modal = () => {\r\n    const popupBtns = document.querySelectorAll('.popup-btn');\r\n    const modal = document.querySelector('.popup');\r\n\r\n\r\n    const animateModal = () => {\r\n        modal.style.transform = 'scale(0)';\r\n        modal.style.transition = 'all 0.3s ease-in-out';\r\n        modal.style.opacity = '0';\r\n\r\n        if (modal.style.display !== 'block') {\r\n            modal.style.display = 'block';\r\n            (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modal.style.opacity = `${progress}`;\r\n                    modal.style.transform = `scale(${progress})`;\r\n                }\r\n            });\r\n        } else {\r\n            (0,_helper_js__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                duration: 100,\r\n                timing(timeFraction) {\r\n                    return timeFraction;\r\n                },\r\n                draw(progress) {\r\n                    modal.style.transform = 'scale(0)';\r\n                    modal.style.opacity = '0';\r\n                    setTimeout(() => {\r\n                            modal.style.display = 'none';\r\n                        }, 200);\r\n                }\r\n            });\r\n        }\r\n    };\r\n\r\n    popupBtns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            if (document.documentElement.clientWidth > 768) {\r\n                animateModal();\r\n            } else {\r\n                modal.style.transform = 'scale(1)';\r\n                modal.style.opacity = '1';\r\n                modal.style.display = 'block';\r\n            }\r\n        });\r\n    });\r\n\r\n\r\n    modal.addEventListener('click', (e) => {\r\n        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {\r\n            if (document.documentElement.clientWidth > 768) {\r\n                animateModal();\r\n            } else {\r\n                modal.style.display = 'none';\r\n            }\r\n        }\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./modules/helper.js\");\n\r\nconst sendForm = ({idForm, someElem = []}) => {\r\n    const form = document.querySelector(idForm);\r\n    const formElements = form.querySelectorAll('input');\r\n\r\n    const statusBlock = document.createElement('div');\r\n    statusBlock.style.color = '#fff';\r\n    const loadText = `\r\n    <div class=\"spinner-border text-primary mt-3\" role=\"status\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n    </div>`;\r\n    const errorText = 'Oшибка';\r\n    const successText = 'Спасибо. Наш менеджер свяжется с вами!';\r\n\r\n    const validate = (list) => {\r\n        let success = true;\r\n\r\n        list.forEach(input => {\r\n            if(!input.classList.contains('success')) {\r\n                success = false;\r\n            }\r\n        });\r\n        return success;\r\n    };\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: \"POST\",\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json());\r\n    };\r\n\r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input');\r\n        const formData = new FormData(form);\r\n        const formBody = {};\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val;\r\n        });\r\n\r\n        someElem.forEach(elem => {\r\n            const element = document.querySelector(elem.id);\r\n            \r\n            if(elem.type === 'block' && +element.textContent !== 0) {\r\n                formBody.calculator = element.textContent;\r\n            } else if(elem.type === 'input' && +element.value !== 0) {\r\n                formBody.calculator = element.value;\r\n            }\r\n        });\r\n\r\n        if(validate(formElements)) {\r\n\r\n            statusBlock.innerHTML = loadText;\r\n            form.append(statusBlock);\r\n\r\n            formElements.forEach(input => {\r\n                input.disabled = true;\r\n                input.style.background = 'rgba(255,255,255,0.9)';\r\n            });\r\n\r\n            sendData(formBody)\r\n            .then(() => {\r\n                statusBlock.innerHTML = '';\r\n                statusBlock.textContent = successText;\r\n                formElements.forEach(input => {\r\n                    input.disabled = false;\r\n                    input.style.background = '';\r\n                    input.value = '';\r\n                    input.classList.remove('success');\r\n                    input.style.outline = '';\r\n                });\r\n                setTimeout(()=>{\r\n                    statusBlock.remove();\r\n                }, 5000);\r\n            }).catch((e)=> {\r\n                console.log(e);\r\n                statusBlock.innerHTML = '';\r\n                statusBlock.textContent = errorText;\r\n            });\r\n        } else {\r\n            alert('Данные не валидны, либо не заполнены все поля');\r\n            \r\n        }\r\n    };\r\n\r\n    try {\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n            submitForm();\r\n        });\r\n    }catch(e) {\r\n        console.log(e.message);\r\n    }\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = ({\r\n    sliderContent,\r\n    sliderBtnsClass,\r\n    nextSlideBtn,\r\n    prevSlideBtn,\r\n    sliderItemClass,\r\n    dotsContentClass,\r\n    dotClass,\r\n    dotActiveClass = 'dot-active',\r\n    slideActiveClass = 'portfolio-item-active',\r\n    timer\r\n}) => {\r\n\r\n    if(!sliderContent || !sliderItemClass) {\r\n        return;\r\n    }\r\n    const sliderBlock = document.querySelector(`.${sliderContent}`);\r\n    const sliders = document.querySelectorAll(`.${sliderItemClass}`);\r\n    const portfolioDots = document.querySelector(`.${dotsContentClass}`);\r\n\r\n    let currentSlide = 0;\r\n    let dots;\r\n    let interval;\r\n\r\n    const createDots = () => {\r\n        sliders.forEach(() => {\r\n            const dot = document.createElement('li');\r\n            dot.classList.add(dotClass);\r\n            portfolioDots.append(dot);\r\n        });\r\n        dots = document.querySelectorAll(`.${dotClass}`);\r\n        dots[currentSlide].classList.add(dotActiveClass);\r\n    };\r\n\r\n    const prevSlide = (elems, idx, className) => {\r\n        elems[idx].classList.remove(className);\r\n    };\r\n\r\n    const nextSlide = (elems, idx, className) => {\r\n        elems[idx].classList.add(className);\r\n    };\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(sliders, currentSlide, slideActiveClass);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n        currentSlide++;\r\n        if (currentSlide >= sliders.length) {\r\n            currentSlide = 0;\r\n        }\r\n        nextSlide(sliders, currentSlide, slideActiveClass);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n    };\r\n\r\n    const startSlide = (timer = 2000) => {\r\n        interval = setInterval(autoSlide, timer);\r\n    };\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval);\r\n    };\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        if (!e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n            return;\r\n        }\r\n\r\n        prevSlide(sliders, currentSlide, slideActiveClass);\r\n        prevSlide(dots, currentSlide, dotActiveClass);\r\n\r\n        if (e.target.matches(nextSlideBtn)) {\r\n            currentSlide++;\r\n        } else if (e.target.matches(prevSlideBtn)) {\r\n            currentSlide--;\r\n        } else if (e.target.classList.contains(dotClass)) {\r\n            dots.forEach((dot, idx) => {\r\n                if (e.target === dot) {\r\n                    currentSlide = idx;\r\n                }\r\n            });\r\n        }\r\n\r\n        if (currentSlide >= sliders.length) {\r\n            currentSlide = 0;\r\n        }\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = sliders.length - 1;\r\n        }\r\n\r\n        nextSlide(sliders, currentSlide, slideActiveClass);\r\n        nextSlide(dots, currentSlide, dotActiveClass);\r\n    });\r\n\r\n\r\n    sliderBlock.addEventListener('mouseenter', (e) => {\r\n        if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n            stopSlide();\r\n        }\r\n    }, true);\r\n\r\n    sliderBlock.addEventListener('mouseleave', (e) => {\r\n        if (e.target.matches(`.${dotClass}, .${sliderBtnsClass}`)) {\r\n            startSlide(timer);\r\n        }\r\n    }, true);\r\n\r\n    createDots();\r\n    startSlide(timer);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n    const tabsContent = document.querySelectorAll('.service-tab');\r\n    const tabsPanel = document.querySelector('.service-header');\r\n    const tabs = document.querySelectorAll('.service-header-tab');\r\n\r\n    tabsPanel.addEventListener('click', (e) => {\r\n        if (e.target.closest('.service-header-tab')) {\r\n            const tabBtn = e.target.closest('.service-header-tab');\r\n            tabs.forEach((tab, i) => {\r\n                if (tab === tabBtn) {\r\n                    tab.classList.add('active');\r\n                    tabsContent[i].classList.remove('d-none');\r\n                } else {\r\n                    tab.classList.remove('active');\r\n                    tabsContent[i].classList.add('d-none');\r\n                }\r\n            });\r\n        }\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.querySelector('#timer-hours');\r\n    const timerMinutes = document.querySelector('#timer-minutes');\r\n    const timerSeconds = document.querySelector('#timer-seconds');\r\n    let idInterval;\r\n\r\n    const getTimeRemaining = () => {\r\n\r\n        const dateStop = new Date(deadline).getTime();\r\n        const dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n        let hour = Math.floor((timeRemaining / 60 / 60));\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        return {\r\n            hour,\r\n            minutes,\r\n            seconds,\r\n            timeRemaining\r\n        };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        const getTime = getTimeRemaining();\r\n        const {\r\n            hour,\r\n            minutes,\r\n            seconds,\r\n            timeRemaining\r\n        } = getTime;\r\n\r\n        timerHours.textContent = hour < 10 ? `0${hour}` : hour;\r\n        timerMinutes.textContent = minutes < 10 ? `0${minutes}` : minutes;\r\n        timerSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;\r\n        \r\n        if (timeRemaining < 0) {\r\n            clearInterval(idInterval);\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n        }\r\n\r\n    };\r\n    idInterval = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;