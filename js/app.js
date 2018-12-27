/*
  Author: Abhinav Singh
*/

Vue.component('card', {
    props: ['title', 'content'],
    data() {    // For components you need to have data function that return object with values.
        return {
            claps: 0,
            clapButton: "Clap for Me",
        };
    },
    template: `
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">
                            {{ title }}
                        </h3>
                        <div class="card-text">
                            {{ content }}
                        </div>
                        <div class="text-center text-muted display-4">{{ claps }}</div>
                        <button :disabled="disabled()" v-on:click="clapForArticle" class="btn btn-info btn-sm">{{ clapButton }}</button>
                        <button v-on:click="deleteArticle" class="btn btn-danger btn-sm">Delete Me</button>
                    </div>
                </div>
    `,
    methods: {
        deleteArticle() {
            this.$emit('delete-article', this.title);   // This is vue's custom function which emits event for us.
            // This code will fire the function in Vue class to access the content of articles present
            // in that class. See the HTML code "<card>" to understand better.
        },
        clapForArticle() {
            this.claps++;
        },
        disabled() {
            if (this.claps >= 50) {
                this.clapButton = "Too Much Love To Handle";
                return true;
            }
        }
    }
});

new Vue({
    el: '#app',
    data: {
        articles: [
            {
                title: "ABCD",
                content: "ssdwhurcyruicutytuiwuct",
            },
            {
                title: "PQRS",
                content: "ioixeqeuruqocyueuieyqbxrutc",
            },
            {
                title: "WXYZ",
                content: "idufuwtyvxrxerqyrxterteqry",
            },
            {
                title: "Sdudg",
                content: "ssdwhurcyruicutytuiwuct",
            },
            {
                title: "Pdsdwez",
                content: "ioixeqeuruqocyueuieyqbxrutc",
            },
            {
                title: "wdww",
                content: "idufuwtyvxrxerqyrxterteqry",
            },{
                title: "efeeD",
                content: "ssdwhurcyruicutytuiwuct",
            },
            {
                title: "PQzwddRS",
                content: "ioixeqeuruqocyueuieyqbxrutc",
            },
            {
                title: "WXYZsass",
                content: "idufuwtyvxrxerqyrxterteqry",
            },{
                title: "sawdABCD",
                content: "ssdwhurcyruicutytuiwuct",
            },
            {
                title: "mmmPQRS",
                content: "ioixeqeuruqocyueuieyqbxrutc",
            },
            {
                title: "mmmmWXYZ",
                content: "idufuwtyvxrxerqyrxterteqry",
            }
        ],
        articlePointer: 3,
    },
    methods: {
        removeArticle(event) {
            this.articles = this.articles.filter(article => article.title !== event)
        },
        loadArticles() {
            this.articlePointer += 3;
        },
        disabled() {
            return this.articlePointer >= this.articles.length;
        }
    }
});
