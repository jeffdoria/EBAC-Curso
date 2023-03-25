// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

   $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:3,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
  })


    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first())

    // Configuração de produtos

    $('.owl-nav').addClass('d-flex justify-content-evenly fs-1')
    $('.featured-item').addClass('position-relative')
    $('.featured-item a').addClass('btn btn-success d-grid gap-2')
    $('.featured-item:first').append('<div class="position-absolute top-0 start-0  m-2"><span class="badge bg-danger fs-6">Novo</span></div>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        })

     })

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault()

        alert('Produto esgotado')

     })
     


/*

*Ouvinte  de eventos .nav-modal-open
*/

    $('.nav-modal-open').on('click', function(e){

        e.preventDefault()

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#' + elem).html())

        $('modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show() 
    })

    function validate( elem ){
        if( elem.val() == '') {
  
           console.log('o campo de '+ elem.attr('name') + ' é obrigatório')
  
           elem.parent().find('.text-muted').show()
  
           elem.addClass('invalid')
  
           return false
        } else {
           elem.parent().find('.text-muted').hide()
           elem.removeClass('invalid')
        }
     }

    $('body').on('submit', '.modal-body .form', function(e){

        e.preventDefault()
  
        const inputName = $('#nome')
        const inputEmail = $('#email')
  
        validate(inputName)
        validate(inputEmail)
  
        if(inputEmail.hasClass('invalid') || inputName.hasClass('invalid')){
           console.log('verificar campos obrigatórios')
           return false
        } else {
           $(this).submit()  
        }
  
     })

     $('body').on('blur', '#nome', function(){
        validate($(this))
     })
  
     $('body').on('blur', '#email', function(){
        validate($(this))
     })
  
  
     $('body').on('focus', '#date', function(){
        $(this).datepicker()
     })
  
     $('body').on('blur', '#date', function(){
        validate($(this))
        $(this).mask('00/00/0000');
     }) 
  
     $('body').on('blur', '#time', function(){
        validate($(this))
        $(this).mask('00:00');
     })
  
     $('body').on('blur', '#cep', function(){
        validate($(this))
        $(this).mask('00000-000');
     })
  
     $('body').on('blur', '#phone', function(){
        validate($(this))
        $(this).mask('00000-0000');
     })
  
     $('body').on('blur', '#cpf', function(){
        validate($(this))
        $(this).mask('000.000.000-00');
     })
})
