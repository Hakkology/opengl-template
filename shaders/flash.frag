#version 330

precision mediump float;

uniform float time;
uniform sampler2D tex;
uniform vec4 color;
uniform float t;

in vec2 uv;
out vec4 out_color;

void main(void) {
    vec2 cPos = 2.0*uv - 1.0;
    float cLength = length(cPos);
    vec2 tex_uv = uv + (cPos/cLength)*cos(cLength*12.0-time*4.0)*0.03;

    out_color = mix(texture(tex, uv), color, t);
}
