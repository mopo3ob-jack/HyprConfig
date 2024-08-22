precision mediump float;
varying vec2 v_texcoord;
uniform sampler2D tex;

const float threshold = 1.0;
const float intensity = 1.5;

const vec2 textureDelta = vec2(1.0) / vec2(1920.0, 1080.0);
const vec3 colorEvaluator = normalize(vec3(0.2126, 0.7152, 0.0722));

void main() {
	vec4 color = texture2D(tex, v_texcoord);

	

	gl_FragColor = color;
}
