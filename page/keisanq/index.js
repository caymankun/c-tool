
        let re1, re2, kigou; // 変数を関数の外部で宣言
        math1(); // 初期の問題を生成
        function math1() {
            let panel = document.getElementById('qwes');
            let panelkigo = document.getElementById('kigo');
            let panelu = document.getElementById('qwesu');
            const min = 1;
            const max = 9;
            re1 = Math.floor(Math.random() * (max + 1 - min)) + min;
            re2 = Math.floor(Math.random() * (max + 1 - min)) + min;
            const ac = ['+', '-', '*', '/'];
            kigou = ac[Math.floor(Math.random() * ac.length)];
            let bodykigo = "";
            if (kigou === '+') {
                bodykigo = "+";
            } else if (kigou === '-') {
                bodykigo = "-";
            } else if (kigou === '*') {
                bodykigo = "×";
            } else if (kigou === '/') {
                bodykigo = "÷";
            }
            panelkigo.innerText = bodykigo;
            panel.innerText = re1;
            panelu.innerText = re2;
        }
    
        function ok() {
            let ans;
            if (kigou === '+') {
                ans = re1 + re2;
            } else if (kigou === '-') {
                ans = re1 - re2;
            } else if (kigou === '*') {
                ans = re1 * re2;
            } else if (kigou === '/') {
                ans = re1 / re2;
            }
            let input = document.getElementById('input');
            let response = document.getElementById('resp');
            let userAnswer = parseFloat(input.value);
            let correctAnswer = parseFloat(ans);
            if (userAnswer === correctAnswer) {
                response.innerText = "正解です！";
            } else {
                response.innerText = "不正解です。正しい答えは " + ans + " です。";
            }
            input.value = ""; // 入力欄を空にする
            math1(); // 新しい問題を生成
        }
        
