'use strict';

const man = function (a) {
    this.name = a;
};

const jonas = { name: 'blabla' };

man.call(jonas, 'bla bla bla');
man();
