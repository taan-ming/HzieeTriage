<template>
    <div class="chat-all">
        <div class="chat" ref="messageContainer">
            <div v-for="(message, index) in messages"
            :key="index"
            :class="message.align === 'left' ? 'message-left' : 'message-right'">
                <div class="name">
                    <span>{{ message.name }} {{ message.time }}</span>
                </div>
                <div class="chat_message">
                    {{ message.text }}
                </div>
            </div>
        </div>
        <div class="chat-input">
            <div class="textanswer" style="display:flex;flex: 1; margin-right: 10px;">
                <textarea class="textplease" 
                v-model="input" 
                :disabled="isInputDisabled"
                @keyup.enter="submit" 
                placeholder="请输入你的消息..."></textarea>
                <button :disabled="isInputDisabled" @click="submit">发送</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"ChatBox",
    data(){
        return{
            messages:[
                {text:"您好，有什么可以帮您？", 
                align: "left", name: "机器人", 
                time:new Date().toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})}
            ],
            input:'',
            isInputDisabled : false
        }
    },
    methods:{
        submit(){
            if(this.input.trim() != ''){
              this.isInputDisabled = true;
                const userMessage = {
                    text: this.input,
                    align: 'right',
                    name: '您',
                    time:new Date().toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})
                };
                this.messages.push(userMessage);
                console.log('发送：', this.input);
                this.input = '';

                this.$nextTick(this.scrollToBottom);
                setTimeout(() => {
                  const botMessage = {
                        text: '好的',
                        align: 'left',
                        name: '机器人',
                        time: new Date().toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})
                    };
                    this.messages.push(botMessage);
                    this.$nextTick(this.scrollToBottom);
                    this.isInputDisabled = false;
                }, 1000)
            }
        },
        scrollToBottom(){
          this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
        },
        botAnswer(){

        }
    }
}
</script>

<style>
.chat-all {
  display: flex;
  flex-direction: column;
  margin: 10px;
}

.chat {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: #edefee;
  border: 1px solid #e4e7ed;
  border-radius: 3px;
  padding: 16px;
}

.chat .name {
  font-family: PingFangSC-Regular;
  font-weight: 400;
  font-size: 12px;
  color: #909399;
  margin-bottom: 6px;
}

.chat_message {
  padding: 6px 12px;
  background: #f8f8f9;
  border-radius: 4px;
  margin-bottom: 15px;
  margin-top: 5px;
  word-wrap: break-word;
  font-weight: 400;
  font-size: 14px;
  color: #303133;
}

.message-left {
  max-width: 418px;
  align-self: flex-start;
}

.message-left .chat_message {
  background-color: #f8f8f9;
}

.message-left .name {
  align-self: flex-start;
}

.message-right {
  max-width: 418px;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
}

.message-right .chat_message {
  background-color: #ebf3ff;
}

.message-right .name {
  align-self: flex-end;
}

.chat-input {
  background-color: #eef3f0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  margin-top: 2px;
  border-top: 2px solid #e0e2e6;
  border: 1px solid #e0e2e6;
  border-radius: 8px;
}

.textplease {
  flex: 1;
  height: auto;
  resize: none;
  padding: 8px;
  border: 1px solid #ccc;
  overflow-y: auto;
}

button {
  width: 70px;
  margin-left: 10px;
  background-color: #fff;
  color: #0256ff;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0255ff;
  color: #fff;
}
</style>