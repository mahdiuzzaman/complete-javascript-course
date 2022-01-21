'use strict';

function man(a) {
    this.name = a;
}

const jonas = { name: 'blabla' };

man.call(jonas, 'bla bla bla');
man();
