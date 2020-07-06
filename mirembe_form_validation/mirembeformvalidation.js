
    var form=document.getElementById('form')
    var fname=document.getElementById('fname');
    var lname=document.getElementById('lname');
    var street=document.getElementById('street');
    var city=document.getElementById('city');
    var biography=document.getElementById('biography');
    var pic=document.getElementById('pic');
    var agegroup=document.getElementById('agegroup');
    var hobbies=document.getElementById('hobbies');
    var favoritecar=document.getElementById('favoritecar');
    var transport=document.getElementById('transport');
    //var reply=document.querySelector('b');
    var letters=/^[A-za-a]+$/;
    
    form.addEventListener('submit',(event)=>{
        event.preventDefault();

        checkfieldsubmitted()
    })
    function checkfieldsubmitted(){
        //get values
            var fname_input=fname.value;
            var lname_input=lname.value;
            var street_input=street.value;
            var city_input=city.value;
            var biography_input=biography.value;
            var pic_input=pic.value;
            var agegroup_input=agegroup.value;
            var hobbies_input=hobbies.value;
            var favoritecar_input=favoritecar;
            var transport_input=transport.value;
            //var letters_input=letters.value;

            //validating first name field
            if(fname_input==''){
                //show  error message and add error class           
                showerror(fname, 'fill in firstname');
            }else if(!fname_input.match(letters)){
                showerror(fname, 'firstname should contain letters only')
            }else if(fname_input.length < 3 || fname_input > 10){
                showerror(fname, 'firstname should have between 3 to 10 letters');
            }
            else{
                // add successful class
                successmsg(fname)
                // var b=document.querySelector('b');
                // var fieldset = 'fieldset success'
            }

           
            //validating last name field
            if(lname_input==''){
                //show  error message and add error class           
                showerror(lname, 'fill in lastname');
            }else if(!lname_input.match(letters)){
                showerror(lname, 'last name should contain letters only');
            }else if(lname_input.length<6 || lname_input.length>20){
                showerror(lname, 'last name should be between 6 and 20 letters');
            
            }else{
                // add successful class
                successmsg(lname)
            }


             
            //validating street field
            if(street_input==''){
                showerror(street, 'fill in the street field');
            }else if(!street_input.match(letters)){
                showerror(street, 'street should have only letters');
            }else{
                successmsg(street);
            }

            //validating city

            if(city_input==''){
                showerror(city, 'please fill in your city');
            }else if (!city_input.match(letters)){
                showerror(city, 'city should contain letters only')
            }else{
                successmsg(city);
            }

            //validating biography
            if(biography_input==''){
                showerror(biography, 'please tell us about yourself');
            }else{
                successmsg(biography);
            }

            //validating image
            if(pic_input==''){
                showerror(pic, 'attached your passport photo')
            }else{
                successmsg(pic);
            }

            //validating age group dropdown
            if(agegroup_input=="Please select"){
                showerror(agegroup, 'select your age group')
            
            }else{
                successmsg(agegroup);
            }


            //validating hobbies field
            if(hobbies_input==''){
                showerror(hobbies, 'select your hobbies');
            }else{
                successmsg(hobbies);

            }

            //validating favorite car field
            if(favoritecar_input=="Please Select"){
                showerror(favoritecar, 'select your favorite car')
            
            }else{
                successmsg(favoritecar);
            }

            //validating the transport field
            if(transport_input==''){
                showerror(transport, 'select your favorite transport')
            }else{
                successmsg(transport);
            }

        }

        





        function showerror(input,message){
            var fieldset=input.parentElement; //which is my fieldset
            var b = fieldset.querySelector('b');
            //add error message inside the bold tag
            b.innerText=message;
            //add error class
            fieldset.className = 'fieldset error';
        }

        function successmsg(input){
            var fieldset=input.parentElement; //which is my fieldset
            fieldset.className = 'fieldset successful';
        }
       
    