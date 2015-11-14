var Page = {
    div: function(id) {
        var node = document.createElement('div');
        node.id = id;
        document.body.appendChild(node);
        return node;
    }
};
