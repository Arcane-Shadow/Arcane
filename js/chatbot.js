function voice() {
    if (window.hasOwnProperty('webkitSpeechRecognition')) {
      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = 'en-US';
      recognition.start();

      recognition.onresult = function (e) {
        document.getElementById('userBox').value = e.results[0][0].transcript;
        recognition.stop();
      };

      recognition.onerror = function (e) {
        recognition.stop();
      };
    }
  }
function talk(){
                var know ={
                    "hi":"Hello",
                    "Hi":"Hello",
                    "How are you?":"Great !",
                    "how are you?":"Great !",
                    "Bye":"Have A Nice Day !",
                    "bye":"Have A Nice Day !",
                    "Hello":"Hi , Whats Up",
                    "hello":"Hi , Whats Up",
                    "letme login":"Yes , Enter the password",
                    
                    "whats new today?":"Buckle up sit tight, I m gonna teach u some Precise Tips for Typing Speed Today!",
                    "Whats new today?":"Buckle up sit tight, I m gonna teach u some Precise Tips for Typing Speed Today!",
                    "like on what topic?":"On consistency Routine and Touch Typing... ",
                    "topic?":"On consistency Routine and Touch Typing... ",
                    "Topic?":"On consistency Routine and Touch Typing... ",
                    "Like on what topic?":"On consistency Routine and Touch Typing... ",
                    "ok so whats tip1?":"Focus on accuracy over speed!",
                    "tip1?":"Focus on accuracy over speed!",
                    "Tip1?":"Focus on accuracy over speed!",
                    "Ok so whats tip1?":"Focus on accuracy over speed!",
                    "and tip2":"Set specific goals!, Stop with the hunt and peck",
                    "tip2":"Set specific goals!, Stop with the hunt and peck",
                    "Tip2":"Set specific goals!, Stop with the hunt and peck",
                    "And tip2":"Set specific goals!, Stop with the hunt and peck",
                    "tip3":"Go slow and be deliberate See how many words you can type in a row without looking at your hands",
                    "Tip3":"Go slow and be deliberate See how many words you can type in a row without looking at your hands",
                    "thanks it helped me a lot!":"Its always a pleasure helping u, Have A Nice Day !",
                    "Thanks it helped me a lot!":"Its always a pleasure helping u, Have A Nice Day !",
                    "Thanks": "Its always a pleasure helping u, Have A Nice Day !",
                    "thanks": "Its always a pleasure helping u, Have A Nice Day !",
                    
                    "What are the benefits of touch typing?":"Touch typing, where you type without looking at the keyboard, offers several advantages, including increased typing speed, improved accuracy, reduced strain on wrists and fingers, and enhanced productivity.",
                    "what are the benefits of touch typing":"Touch typing, where you type without looking at the keyboard, offers several advantages, including increased typing speed, improved accuracy, reduced strain on wrists and fingers, and enhanced productivity.",
                    "How can I improve my typing speed?":"Practice is key to improving your typing speed. Regularly use typing exercises or games to enhance muscle memory and finger dexterity. Additionally, focus on maintaining proper hand and finger placement on the keyboard (known as touch typing).",            
                    "how can i improve my typing speed":"Practice is key to improving your typing speed. Regularly use typing exercises or games to enhance muscle memory and finger dexterity. Additionally, focus on maintaining proper hand and finger placement on the keyboard (known as touch typing).",            
                    "What is the average typing speed for an adult?":"The average typing speed for an adult can vary, but around 40 to 60 words per minute (WPM) is considered a reasonable speed. However, some people can type much faster, reaching speeds of 80 WPM or more with practice.",          
                    "what is the average typing speed for an adult":"The average typing speed for an adult can vary, but around 40 to 60 words per minute (WPM) is considered a reasonable speed. However, some people can type much faster, reaching speeds of 80 WPM or more with practice.",          
                    "What are some common typing errors, and how can I reduce them?":"Common typing errors include typos, incorrect key presses, and missed letters. To reduce these errors, slow down and concentrate on accuracy during practice. Gradually increase your speed as your accuracy improves.",  
                    "what are some common typing errors and how can w reduce them":"Common typing errors include typos, incorrect key presses, and missed letters. To reduce these errors, slow down and concentrate on accuracy during practice. Gradually increase your speed as your accuracy improves.",  
                    "What is the standard QWERTY keyboard layout?":"The QWERTY keyboard layout is the most common keyboard layout used for English-language keyboards. It is named after the first six letters in the top row of the keyboard. This layout was designed to prevent jamming of mechanical typewriters in the past.", 
                    "what is the standard qwerty keyboard layout":"The QWERTY keyboard layout is the most common keyboard layout used for English-language keyboards. It is named after the first six letters in the top row of the keyboard. This layout was designed to prevent jamming of mechanical typewriters in the past.", 
                    "Are there alternative keyboard layouts to QWERTY?":"Yes, there are alternative keyboard layouts designed to increase typing efficiency. One popular alternative is the Dvorak Simplified Keyboard, which places commonly used keys under the strongest fingers. Other layouts include Colemak and Workman.",
                    "what are the alternative keyboard layouts to qwerty":"Yes, there are alternative keyboard layouts designed to increase typing efficiency. One popular alternative is the Dvorak Simplified Keyboard, which places commonly used keys under the strongest fingers. Other layouts include Colemak and Workman.",
                    "Can I type faster on a mechanical keyboard compared to a regular keyboard?":"Mechanical keyboards can offer faster typing speeds for some individuals due to their tactile feedback and lower actuation force. However, typing speed also depends on personal preference and familiarity with the keyboard.",
                    "can i type faster on a mechanical keyboard":"Mechanical keyboards can offer faster typing speeds for some individuals due to their tactile feedback and lower actuation force. However, typing speed also depends on personal preference and familiarity with the keyboard.",
                    "How can I avoid wrist strain while typing for long periods?":"To reduce wrist strain, maintain a neutral wrist position while typing, use an ergonomic keyboard and chair, and take regular breaks to stretch your wrists and hands.",
                    "how to avoid wrist strain while typing for long periods":"To reduce wrist strain, maintain a neutral wrist position while typing, use an ergonomic keyboard and chair, and take regular breaks to stretch your wrists and hands.",
                    "Are there typing courses or resources available online?":"Yes, there are numerous typing courses and resources available online. Websites and apps like Typing.com, Keybr.com, and Ratatype offer typing lessons and exercises for beginners and advanced typists alike.",
                    "Is it essential to learn touch typing, or can I stick to my own typing style?":"While touch typing can significantly improve typing speed and accuracy, it's not mandatory. Some individuals have developed their own typing style over the years and are comfortable with it. However, learning touch typing can be beneficial for most people in the long run.",   
                    "how can typing fast will help me":"It helps in several ways like, Improve communication, Increased productivity, Enhanced Professional Skills and many more.", 
                };
                var user = document.getElementById('userBox').value;
                document.getElementById('chatLog').innerHTML = user + "<br>";
                if(user in know){
                    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
                }else{
                    document.getElementById('chatLog').innerHTML = "I do not understand .";
                }
            }
