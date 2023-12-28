
// export default function Anim() {
//     window.requestAnimationFrame =
//         window.requestAnimationFrame ||
//         (function () {
//             return function (callback:Function, element: { __lastTime: number; }) {
//                 var lastTime = element.__lastTime;
//                 if (lastTime === undefined) {
//                     lastTime = 0;
//                 }
//                 var currTime = Date.now();
//                 var timeToCall = Math.max(1, 33 - (currTime - lastTime));
//                 window.setTimeout(callback, timeToCall);
//                 element.__lastTime = currTime + timeToCall;
//             };
//         })();

//     var loaded = false;
//     var init = function () {
//         if (loaded) return;
//         loaded = true;
//         var _scale = (innerWidth < innerHeight) ? (innerWidth/innerHeight) * 1.4 : (innerHeight/innerWidth)*3;
//         var canvas = document.getElementById('heart') as HTMLCanvasElement;
//         var ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
//         canvas.width = innerWidth * 1.7;
//         canvas.height = innerHeight * 1.7/1.3;
//         ctx.fillStyle = "rgba(12,10,9,1)";
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         // Shape Functions
//         var shapePosition = function (rad:number) {
//             // return [Math.pow(Math.sin(rad), 3), -(15*Math.cos(rad) - 5*Math.cos(2*rad) - 2*Math.cos(3*rad) - Math.cos(4*rad))];
//             return [Math.pow(Math.sin(rad), 3)*_scale, 
//                 -(5*Math.cos(rad) - 10*Math.pow(Math.cos(2*rad), 3) - Math.cos(3*rad))*_scale];

//         };
//         var scaleAndTranslate = function (pos: number[], sx: number, sy: number, dx: number, dy: number) {
//             return [dx + pos[0] * sx, dy + pos[1] * sy];
//         };

//         window.addEventListener('resize', function () {
//             canvas.width = innerWidth;
//             canvas.height = innerHeight/1.3;
//             ctx.fillStyle = "rgba(12,10,9,1)";
//             ctx.fillRect(0, 0, canvas.width, canvas.height);
//         });
        
//         // Main Part
//         var traceCount = 20;
//         var pointsOrigin: any[][] = [];
//         var i;
//         var dr = 0.1;
//         for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(shapePosition(i), 210, 13, 0, 0));
//         for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(shapePosition(i), 150, 9, 0, 0));
//         for (i = 0; i < Math.PI * 2; i += dr) pointsOrigin.push(scaleAndTranslate(shapePosition(i), 90, 5, 0, 0));
//         var pointsCount = pointsOrigin.length;

//         var targetPoints: number[][] = [];
//         var pulse = function (kx: number, ky: number) {
//             for (i = 0; i < pointsOrigin.length; i++) {
//                 targetPoints[i] = [];
//                 targetPoints[i][0] = kx * pointsOrigin[i][0] + canvas.width / 2;
//                 targetPoints[i][1] = ky * pointsOrigin[i][1] + canvas.height / 2;
//             }
//         };

//         var e: any[] = [];
//         var rand = Math.random;
//         for (i = 0; i < pointsCount; i++) {
//             var x = rand() * canvas.width;
//             var y = rand() * canvas.height;
//             e[i] = {
//                 vx: 0,
//                 vy: 0,
//                 R: 2,
//                 speed: rand() + 2 * _scale,
//                 q: ~~(rand() * pointsCount),
//                 D: 2*(i % 2) - 1,
//                 force: 0.2 * rand() + 0.4 * _scale,
//                 f: "hsla(0," + ~~(20 * rand() + 90) + "%," + ~~(20 * rand() + ((rand() < 0.95) ? 90 : 50)) + "%,.9)",
//                 trace: []
//             };
//             for (var k = 0; k < traceCount; k++) e[i].trace[k] = { x: x, y: y };
//         }

//         var config = {
//             traceK: 0.4,
//             timeDelta: 0.02
//         };

//         var time = 0;
//         var loop = function () {
//             var n = -Math.cos(time);
//             pulse((1 + n) * .5, (1 + n) * .5);
//             time += ((Math.sin(time)) < 0 ? 9 : (n > 0.8) ? .2 : 1) * config.timeDelta;
//             ctx.fillStyle = "rgba(0,0,0,.1)";
//             ctx.fillRect(0, 0, canvas.width, canvas.height);
//             for (i = e.length; i--;) {
//                 var u = e[i];
//                 var q = targetPoints[u.q];
//                 var dx = u.trace[0].x - q[0];
//                 var dy = u.trace[0].y - q[1];
//                 var length = Math.sqrt(dx * dx + dy * dy);
//                 if (10 > length) {
//                     if (0.95 < rand()) {
//                         u.q = ~~(rand() * pointsCount);
//                     }
//                     else {
//                         if (0.99 < rand()) {
//                             u.D *= -1;
//                         }
//                         u.q += u.D;
//                         u.q %= pointsCount;
//                         if (0 > u.q) {
//                             u.q += pointsCount;
//                         }
//                     }
//                 }
//                 u.vx += -dx / length * u.speed;
//                 u.vy += -dy / length * u.speed;
//                 u.trace[0].x += u.vx;
//                 u.trace[0].y += u.vy;
//                 u.vx *= u.force;
//                 u.vy *= u.force;
//                 for (k = 0; k < u.trace.length - 1;) {
//                     var T = u.trace[k];
//                     var N = u.trace[++k];
//                     N.x -= config.traceK * (N.x - T.x);
//                     N.y -= config.traceK * (N.y - T.y);
//                 }
//                 ctx.fillStyle = u.f;
//                 for (k = 0; k < u.trace.length; k++) {
//                     ctx.fillRect(u.trace[k].x, u.trace[k].y, _scale, _scale);
//                 }
//             }
//             window.requestAnimationFrame(loop, canvas);
//         };
//         loop();
//     };

//     var s = document.readyState;
//     if (s === 'complete' || s === 'loading' || s === 'interactive') init(); /* s === 'loaded' */
//     else document.addEventListener('DOMContentLoaded', init, false);

//     return (
//         <>
//         </>
//     )
// }