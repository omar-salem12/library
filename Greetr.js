(function(global,$){
     
  var Greetr = function(firstName,lastName,language) {
      return new Greetr.init(firstName,lastName,language);
  }

  // this code hidden within the scope of the IIFE and never directly accessible.
  var supportLangs = ['en','es'];

  var greetings = {
    en:'Hello',
    es:'Hola'
  }

 var formalGreetings = {
     en: 'Greetings',
     es: 'Saludos'

  }

  var logMessage = {
    en: 'Logged in',
    es: 'Inicio sesion'
  }

   Greetr.prototype = {

    /////////////////////////////Start fullName Function////////////////////////////////////
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },
    
      ///////////////////////////End FullName Function///////////////////////////////////



      /////////////////////////Start Validata Function//////////////////////////////////////
      validata: function() {
       if(supportLangs.indexOf(this.language) ===-1)
       {
          throw "Invalid language";
       }
      },
      /////////////////////////End Validata Function///////////////////////////////



     ////////////////////////////Start greeting Function////////////////////////////////////////

      greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
      },

      /////////////////////////////End greting Function//////////////////////////////


    //////////////////////Start formalGreetings Function///////////////////////////////
      formalGreetings:function() {
        return formalGreetings[this.language] + ', ' + this.fullName() + '!';
      },
   ///////////////////////////End formalGreetings Function//////////////////////////////

  
      /////////////////////////Start greet Function.//////////////////////////////////////////
      greet: function(formal) {
        var msg;

        // if undefined or null it will be coerced to 'false'
        if(formal) {
          
          msg = this.formalGreetings();
        }
        else {
          msg = this.greeting();
        }
        if(console) {
          console.log(msg);
        }

        return this;
      },
       
     //////////////////////////////End greet Function////////////////////////////////////////
    


     /////////////////////////////Start log Function//////////////////////////////////
     log: function() {
       if(console) {
         console.log(logMessage[this.language] + ': ' + this.fullName());
       }
       return this;
     },
     ////////////////////////////End log Function///////////////////////////////////
    

     /////////////////////////Start setLang Function//////////////////////////////////
      setLang: function(lang) {
        this.language = lang;
        this.validata();
        return this;
      },
     /////////////////////////End setLang Function////////////////////////////////

     /////////////////////////Start HTMLgreeting Function///////////////////////////////

       HTMLgreeting:function(selector,formal)
       {
         if(!$)
         {
           throw "jQuery not loaded!"
         }
         if(!selector) {
           throw 'Missing jQuery selector';
         }
         var msg;
         if(formal) {
           msg = this.formalGreetings();
         }
         else {
           msg = this.greeting();
         }

         $(selector).html(msg);
         return this;
       }


     //////////////////////////End HTMLgreeting Function////////////////////////////

   };


  Greetr.init = function(firstName,lastName,language)
  {
      var self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;

}(window,jQuery));