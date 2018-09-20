/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 */

import m, { Vnode } from 'mithril';
import '../scss/main.scss';
import $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import '../scss/sidebar.scss'
import '../scss/animate.scss'
import '../scss/user-form.scss'

import MainWindow from './views/MainWindow';
import UserList from './components/user.list'
import HelloWorld from './components/hello.world'
import UpdateUserForm from './components/user.update.form'
import CreateUserForm from './components/user.create.form'

m.route(document.body, "/", {
    "/": {
        render() {
            return m(MainWindow, m(HelloWorld))
        }
    },
    "/users": {
        render() {
            return m(MainWindow, m(UserList))
        }
    },
    "/users/:id/edit": {
        render(vnode) {
			return m(MainWindow, m(UpdateUserForm, vnode.attrs))
		}
    },
    "/users/create": {
        render(vnode) {
            return m(MainWindow, m(CreateUserForm))
        }
    }
});

$(document).ready(() => {

    $('#sidebar-collapse').on('click', () => {
        $('.sidebar').toggleClass('active');
    })
})

window.addEventListener('resize', () => {
    if (window.innerHeight < window.innerWidth) {
        $('.sidebar').toggleClass('active');
    }
});