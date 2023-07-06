const input = document.getElementById('xboxid');
input.addEventListener("keydown", (e) => {
        if( e.keyCode === 13 ){
                enter();
        }
});
function enter(){
        const xboxid = document.getElementById('xboxid').value;
        fetch('https://api.geysermc.org/v2/xbox/xuid/' + xboxid )
        .then(response => {
            return response.json()
        })
        .then(data1 => {
            const xuid = data1.xuid
            fetch('https://api.geysermc.org/v2/skin/' + xuid )
            .then(response => {
                return response.json()
            })
            .then(data2 => {
                const texture_id = data2.texture_id

            const Image = document.getElementById('re-skin-image')
            Image.src = 'https://textures.minecraft.net/texture/' + texture_id ;
            });
        });
};
