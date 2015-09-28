/**
 * $promisse
 * 
 * Promete que uma funcao callback sera executado ao termino de uma execucao
 * assincrona, nao tornanado o parametro callback obrigatorio
 * 
 * @module $promisse
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        // Retorna um funcao com o metodo estatico done
 *        $promisse();
 * 
 */
this.Ninja.module('$promisse', ['$apply', '$push'], function ($apply, $push) {

  /**
   * Promete que uma funcao callback sera executado ao termino de uma execucao assincrona
   * nao tornando a parametro callback obrigatorio
   * 
   * @public
   * @method promisse
   * @return {Function} Funcao com metedo estatico 'done'
   * @example
   * 
   *        $promisse();
   * 
   */
  function promisse() {

    /**
     * Retorna uma funcao com o metodo estatico 'done', quando executado esta funcao, sera
     * executado a funcao callback passado em done
     */
    return (function (a) {

      /**
       * Funcao executora da promessa
       */
      function resolve() {
        $apply(a.shift() || function () {}, arguments);
      }

      /**
       * Monta o promisse com o metodo estatico 'done'
       */
      return Object.defineProperty(resolve, 'done', { value: $push(a) });

    })([]);

  }

  /**
   * Revelacao do modulo $promisse, encapsulando a visibilidade das funcoes
   * privadas
   */
  return promisse;

});